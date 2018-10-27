/**
 * Created by mqd on 2018/6/3.
 */
import React, {Component} from 'react';
import {Toast} from 'antd-mobile';
import Link from "next/link"
import {getLastParam} from "../../utils/common"
import { connect } from 'react-redux'
import reduxPage from '@reduxPage'
import { getHome } from '@actions'
import { imgUrl, http, setShare } from '@utils'
import {
  Header,
  NavBar,
  TestLists,
  Footer
} from '@components'

const util = require('util')
@reduxPage
@connect(({ home }) => ({ home }))


export default class TestReport extends Component {
  state = {
    bjImg:"",
    title:"",
    des:"",
    testPeople:0,
    homeId:0
  }
  static async getInitialProps(ctx){
    const { store, isServer } = ctx
      try {
        let homeId=getLastParam(ctx.req.url);
        console.log(homeId);
        const homeFetch = await http.post('/test/detail', {id: homeId}, isServer, {isNew: true})
        const result = homeFetch.data
        let {cover, name, desc, testNum} = result;
        return {
          homeId,
          bjImg: cover,
          title: name,
          des: desc,
          testPeople: testNum
        }
      } catch (error) {
        const err = util.inspect(error)
        return { err }
      }
  }
  componentDidMount(){
  }
  render() {
    let {homeId,bjImg,title,des,testPeople}=this.props;
    // console.log(this.props);
    return (
      <div>
        准备开始
        <Header title="心理测试" border="true"/>
        <div>
          <img src={bjImg} alt="" className={"w100p"}/>
        </div>
        <div className={"p10 pb40 pt40"}>
          <div className={"mb30 tac"}>
            <h2 className={"fz22 mb15 c3"}>{title}</h2>
            <div className={"fz16 c6"}>{testPeople}人已测</div>
          </div>
          <div className={"mb40 fz15 c3"}>
            <div dangerouslySetInnerHTML={{ __html: des}}/>
          </div>
          <div className={"tac"}>
            <Link href={`/test/testing/${homeId}`}>
              <a>
              <button className={"btn btn-primary fz15"} style={{width:"1.5rem",height:"0.4rem"}}>开始测试</button>
              </a>
            </Link>
          </div>
        </div>
        <div className={"blank"}></div>
        <Footer/>
      </div>
    );
  }
}
