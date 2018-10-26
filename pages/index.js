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
  Nav,
  Btn,
  WrapLink,
  HomeMessage,
  HomeLimit,
  HomeLoanTypes,
  ProductList,
} from '@components'
import Header from "../components/Header/Header"


const util = require('util')
@reduxPage
@connect(({ home }) => ({ home }))

export default class extends Component {
  state={
    value:10,
    value2:0
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
        const homeFetch = await http.get('home', null, isServer)
        const homeData = homeFetch.data
        store.dispatch(getHome(homeData))
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
    const { name, err } = this.props
    if (err) {
      return <ErrorFetch err={err} />
    }
    return (
      <div>
        <Header title="心理课程" border="true" />
      </div>
    )
  }
}
