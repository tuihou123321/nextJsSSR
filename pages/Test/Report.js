/**
 * Created by mqd on ${DATE}.
 */
import React, {Component} from 'react';
import {Button,Toast} from 'antd-mobile';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {getTestResult} from "../../api/api"
import {getLastParam} from "../../utils/common"

export default class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      desc:"",
      testResult:[],
      resultAnalyse:"",
      title:""
    };
  }
  getData(){
    let resultId=getLastParam();
    Toast.loading("加载中...",0)
    getTestResult({resultId:resultId}, (result)=>{
      let {testResult,desc,resultAnalyse,title}=result;
      this.setState({
        testResult,
        desc,
        resultAnalyse,
        title
      },()=>{
        Toast.hide();
      })
    },()=>{
      Toast.hide();
    });
  }
  testAgain=()=>{
    let homeId= localStorage.getItem("homeId");
    if(homeId){
      this.props.history.push(`/test/start/${homeId}`);
    }
    else{
      Toast.info("没有找到homeId")
    }
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    let {history} = this.props;
    let {desc,testResult,resultAnalyse}=this.state;
    let smallTitle=(title)=>{
      return <div className={"df aic mb15"}>
        <span className={"smallBot3"}></span>
        <div className={"fz13 c3 ml5"}>
          {title}
        </div>
      </div>
    }
    let splitFun=(num)=>{
     num=num.toString();
     let fenshu="";
     if(num.indexOf(".")>0){
       fenshu="."+num.split(".")[1].substring(0,2);
     }
     let resultNum= num.split(".")[0]+fenshu;
     return resultNum;
    }
    return (
      <div>
        <Header title="测试报告页" history={history}/>
          <div className={"p30"}>
            <div>
              <h1 className={"tac fz22 pb35"}>{this.state.title}</h1>
              {smallTitle("测试结果")}
              <div className={"m20 b fz18 blue"}>
                <div dangerouslySetInnerHTML={{ __html: desc}}/>
              </div>
              {
                testResult.length>0 &&   <div className={"m20"}>
                  <table className={"tac fz16 c3 w100p tac"} style={{borderCollapse:"collapse"}}>
                    <tbody>
                    <tr style={{backgroundColor:"#2b91ff"}} className={"white h45"}>
                      <td>维度</td>
                      <td>平均分</td>
                      <td>得分</td>
                    </tr>
                    {
                      testResult.map((item,index)=>{
                        return   <tr className={"h45"} style={{backgroundColor:"#f2f5f7"}} key={index}>
                          <td>{item.name}</td>
                          <td>{splitFun(item.score/item.number)}</td>
                          <td>{item.score}</td>
                        </tr>
                      })
                    }
                    </tbody>
                  </table>
                </div>
              }
              <div>
              </div>
            </div>
            {
              resultAnalyse && <div>
                {smallTitle("测试说明")}
                  <div className={"mb30 ml20"}>
                    <div dangerouslySetInnerHTML={{ __html: resultAnalyse}}/>
                  </div>
                </div>
            }
            <div>
              <div className="tac">
                <Button type="primary" className={"w50p mauto"} onClick={this.testAgain}>重新测试</Button>
              </div>
            </div>
          </div>
        <div className={"blank"}></div>
        <Footer/>
      </div>
    );
  }
}
