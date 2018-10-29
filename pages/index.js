import React, { Component } from 'react'
import { Carousel } from 'antd-mobile'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import reduxPage from '@reduxPage'
import { getHome } from '@actions'
import { imgUrl, http, setShare } from '@utils'
import Link from "next/link"
import {
  ErrorFetch,
  Layout,
  // Nav,
  Btn,
  WrapLink,
  HomeMessage,
  HomeLimit,
  HomeLoanTypes,
  ProductList,
  Header,
  NavBar,
  TestLists
} from '@components'
// import {getData} from "../static/js/common"


const util = require('util')
@reduxPage
@connect(({ home }) => ({ home }))

export default class extends Component {
  state={
    value:10,
    value2:0,
  }
  //getInitialProps,next.js中的方法（可在服务器或客户端运行）
  //返回一个对象，这个对象react组件可以通过this.props来接收
  static async getInitialProps(ctx){
    // err req res pathname query asPath isServer
    // console.log(ctx);
    const { store, isServer,req,headers } = ctx
    if (!store.getState().home) {
      let params={};
      try {
        const user = ctx.cookie;
        console.log(2,user);

        // if(ctx.cookies.get("appId")){
        //   let appId=ctx.cookies.get("appId");
        //   let userInfo=ctx.cookies.get("userInfo");
        //   let {uid, accessToken}=userInfo;
        //   let params2={
        //     appId,
        //     uid,
        //     accessToken
        //   };
        //   params=params2;
        // }
        const homeFetch = await http.post('/test/categories',params, isServer,{isNew:true})
        const homeData = homeFetch.data

        const listsDataFetch = await http.post('/test/list', {page:1, pageSize:10, cateId:1}, isServer,{isNew:true})
        const listsDataResult = listsDataFetch.data
        // return {
        //   tabs:homeData || [],
        //   listsData:listsDataResult.list || [],
        //   total:listsDataResult.total || 0
        // }
        return {
          tabs: [],
          listsData:[],
          total:0
        }
        // store.dispatch(getHome(homeData))
      } catch (error) {
        console.log(error);
        const err = util.inspect(error)
        return { err }
      }
    }
  }
   loadMore=async (id)=>{
    let {page,pageSize}=this.state;
    const listsDataFetch = await http.post('/test/list',{
      page,
      pageSize,
      cateId:id
    }, null,{isNew:true})
    const listsDataResult = listsDataFetch.data;
    let {list,total}=listsDataResult;
    // return {
    //   tabs:homeData,
    //   listsData:list,
    //   total
    // }
  }
  getListsData(id){
    this.setState({
      page:1,
      listsData:[]
    },()=>{
      this.loadMore(id);
    })
  }
  componentDidMount() {
  }
  render() {
    //把后台的错误处理交给前端处理；
    const { name, err,tabs,listsData } = this.props
    console.log(err);
    console.log(1000);
    // console.log(this.props);
    // if (err) {
    //   return <ErrorFetch err={err} />
    // }
    return (
      <div>
        <Header title="心理课程" border="true" />
        {tabs &&   <NavBar tabs={tabs} getListsData={(id)=>this.getListsData(id)}/>}
        <div>
          {listsData && TestLists(listsData)}
        </div>
      </div>
    )
  }
}
