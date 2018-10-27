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
} from '@components'
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import TestLists from "../components/TestLists/TestLists"


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
    console.log(11);
    //这里getInitialProps是next的方法，不能调用this.setState
    // this.setState({
    //   value2:10
    // })
    // err req res pathname query asPath isServer
    console.log(ctx);
    const { store, isServer } = ctx
    if (!store.getState().home) {
      try {
        const homeFetch = await http.post('/test/categories', null, isServer,{isNew:true})
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
    return {
         name:"xiaoming",
      age:18
    }
  }
  getListsData(id){
    console.log(id);
    // this.setState({
    //   page:1,
    //   listsData:[]
    // },()=>{
    //   this.loadMore(id);
    // })
  }
  componentWillMount=()=>{
    this.setState({
      value:12
    })
  }
  componentDidMount() {
    this.setState({
      value:15
    })
  }
  render() {
    //把后台的错误处理交给前端处理；
    const { name, err,tabs,listsData } = this.props
    console.log(tabs);
    if (err) {
      return <ErrorFetch err={err} />
    }
    return (
      <div>
        <Header title="心理课程" border="true" />
        <Nav tabs={tabs} getListsData={(id)=>this.getListsData(id)}/>
        <div>
          {TestLists(listsData)}
        </div>
      </div>
    )
  }
}
