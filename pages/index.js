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
    console.log(10);
    // err req res pathname query asPath isServer
    const {store, req, res, isServer,} = ctx
    if (!store.getState().home) {

      try {
        let params={};
        let allCookie=null;
        if (req) {
          allCookie = req.headers.cookie
          console.log(1,allCookie);
          token = cookie.parse(String(allCookie)).userInfo
          let {accessToken,uid} = JSON.parse(token);
          params.accessToken=accessToken;
          params.uid=uid;
        } else {
          allCookie = document.cookie
          console.log(allCookie);
          // token = cookie.parse(String(allCookie)).userInfo
        }
        console.log(params);

        const homeFetch = await http.post('/test/categories', params, isServer,{isNew:true})
        const homeData = homeFetch.data
        const listsDataFetch = await http.post('/test/list', {
          page:1,
          pageSize:10,
          cateId:1
        }, isServer,{isNew:true})
        const listsDataResult = listsDataFetch.data
        let {list,total}=listsDataResult;
        return {
          tabs:homeData,
          listsData:list,
          total
        }
        // store.dispatch(getHome(homeData))
      } catch (error) {
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
    // if (err) {
    //   return <ErrorFetch err={err} />
    // }
    return (
      <div>
        <Header title="心理课程" border="true" />
        {tabs && tabs.length>0 &&  <NavBar tabs={tabs} getListsData={(id)=>this.getListsData(id)}/>}
        {listsData && listsData.length>0 &&  <div>{TestLists(listsData)}</div>}

      </div>
    )
  }
}
