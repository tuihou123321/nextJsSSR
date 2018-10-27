/**
 * Created by mqd on 2018/6/3.
 */
import React, {Component} from 'react';
// import {Toast} from 'antd-mobile';
// import {Link} from "react-router-dom"
// import {getTestDetail} from "../../api/api"
// import Footer from "../../Components/Footer/Footer";
// import Header from "../../Components/Header/Header";
// import {getLastParam} from "../../utils/common"

export default class TestReport extends Component {
  state = {
    bjImg:"",
    title:"",
    des:"",
    testPeople:"",
    homeId:""
  }
  componentDidMount(){
    // let homeId=getLastParam();
    // this.setState({
    //   homeId
    // })
    // Toast.loading("加载中..", 0);
    // getTestDetail({id:homeId},(result)=>{
    //   let {cover,name,desc,testNum}=result;
    //   this.setState({
    //       homeId,
    //       bjImg:cover,
    //       title:name,
    //       des:desc,
    //       testPeople:testNum
    //   })
    //   Toast.hide();
    // },()=>{
    //   Toast.hide();
    // });
  }
  render() {
    // let {history}=this.props;
    // let {homeId,bjImg,title,des,testPeople}=this.state;
    return (
      <div>
        测试详情页
        {/*<Header title="心理测试" border="true"  history={history}/>*/}

        {/*<div>*/}
          {/*<img src={bjImg} alt="" className={"w100p"}/>*/}
        {/*</div>*/}
        {/*<div className={"p10 pb40 pt40"}>*/}
          {/*<div className={"mb30 tac"}>*/}
            {/*<h2 className={"fz22 mb15 c3"}>{title}</h2>*/}
            {/*<div className={"fz16 c6"}>{testPeople}人已测</div>*/}
          {/*</div>*/}
          {/*<div className={"mb40 fz15 c3"}>*/}
            {/*<div dangerouslySetInnerHTML={{ __html: des}}/>*/}
          {/*</div>*/}
          {/*<div className={"tac"}>*/}
            {/*<Link to={`/test/testing/${homeId}`}>*/}
              {/*<button className={"btn btn-primary fz15"} style={{width:"1.5rem",height:"0.4rem"}}>开始测试</button>*/}
            {/*</Link>*/}
          {/*</div>*/}
        {/*</div>*/}
        {/*<div className={"blank"}></div>*/}
        {/*<Footer/>*/}
      </div>
    );
  }
}
