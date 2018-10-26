import Head from 'next/head'
import React from 'react'
import { Toast } from 'antd-mobile'
import { setConfig, http, isIOS, isAndroid, setCookie, getCookie, delCookie } from '@utils'

export default class Header extends React.Component {
  render() {
    return (
      <div>
        我是头部{this.props.title}
      </div>
    )
  }
}
