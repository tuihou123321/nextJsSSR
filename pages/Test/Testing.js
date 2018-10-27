/**
 * Created by mqd on ${DATE}.
 */
import React, { Component } from 'react';
import { Button,WhiteSpace,Toast,Progress} from 'antd-mobile';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {getTestDetail,saveAnswers} from "../../api/api"
import {getLastParam} from "../../utils/common"
import "./Testing.css"

let arr=["A","B","C","D","E","F","G","H","I","J"];
export default class Testing extends Component {
  state = {
    listsData:[],
    currentIndex:0,  //当前问题的索引
    previousIndexArr:[],  //上一题索引
    homeId:"",
    isTestOver:false,
    jumpIndex:"",
    isJump:1  //isJump===2 时为跳题
  };
  turnToNumber(value){
    switch (value){
      case "A":value=1; break;
      case "B":value=2; break;
      case "C":value=3; break;
      case "D":value=4; break;
      case "E":value=5; break;
      case "F":value=6; break;
      case "G":value=7; break;
      case "H":value=8; break;
      case "I":value=9; break;
      default:value=value;
    }
    return value;
  }
  checkFun=(answerNo,jumpIndex,currentQuestionIndex)=>{
    answerNo=this.turnToNumber(answerNo);
     let {listsData,currentIndex,previousIndexArr}=this.state;
      listsData[currentIndex].testAnswerDtos.forEach(item2=>{
          item2.isChecked=false;
      })
    if(listsData[currentIndex].testAnswerDtos[answerNo-1]){
      listsData[currentIndex].testAnswerDtos[answerNo-1].isChecked=true;
    }
     previousIndexArr.push(currentQuestionIndex)
     this.setState({
       listsData,
       previousIndex:currentQuestionIndex-1,
       previousIndexArr,
       jumpIndex
     })
    //加上延迟，让选中状态可以看到
    setTimeout(()=>{
      this.jumpQuestion(jumpIndex);
    },200)
  }
  jumpQuestion=(jumpIndex)=>{
    let {isJump,currentIndex,listsData}=this.state;
    //isJump===2为跳题
    if(isJump===2){
      let isNumber=true;
      arr.forEach(item=>{
        if(item===jumpIndex){
          isNumber=false;
        }
      })
      if(isNumber){
        this.setState({
          currentIndex: jumpIndex - 1
        })
      }
    }
    else{
      if(currentIndex<listsData.length-1){
        this.setState({
          currentIndex:currentIndex+1
        })
      }
    }
  }
  previousQuestion=()=>{
    let {previousIndexArr}=this.state;
    if(previousIndexArr.length>0){
      let goIndex=previousIndexArr.pop();
      this.setState({
        currentIndex:goIndex-1,
        previousIndexArr
      })
    }
  }
  componentDidMount(){
    let homeId=getLastParam();
    this.setState({
      homeId
    })
    Toast.loading("加载中");
    getTestDetail({id:homeId},(result)=>{
      let {questions,isJump}=result;
      this.setState({
        listsData:questions,
        isJump
      },()=>{
        Toast.hide();
      })
    },()=>{
      Toast.hide();
    })
  }
  //判断是到最后一题了
  isOverFun(){
    let {listsData,isJump,jumpIndex,currentIndex}=this.state;
    let isOver=false;
    if(isJump===2){
      arr.forEach(item=>{
        if(item===jumpIndex){
          isOver=true;
        }
      })
    }
    else{
      if(listsData.length===currentIndex+1){
        isOver=true;
      }
    }
    return isOver;
  }
  submit=()=>{
    let {homeId,listsData}=this.state;
    let answerIds=[];
    listsData.forEach(item=>{
      item.testAnswerDtos.forEach(item2=>{
        if(item2.isChecked){
          answerIds.push(item2.id);
        }
      })
    })
    answerIds=answerIds.toString();
    Toast.loading("加载中");
    saveAnswers({id:homeId,answerIds:answerIds},(result)=>{
      localStorage.setItem("homeId",homeId);
      this.props.history.push(`/test/report/${result}`)
      Toast.hide();
    },()=>{
      Toast.hide();
    })
  }
  lastHasSelectedFun(){
    let {listsData,currentIndex}=this.state;
    let lastHasSelected=false;
    if( listsData[listsData.length-1] && listsData[currentIndex]){
      listsData[currentIndex].testAnswerDtos.forEach(item=>{
        if(item.isChecked){
          lastHasSelected=true;
        }
      })
    }
    return lastHasSelected;
  }
  percentFun(){
    let {listsData,currentIndex}=this.state;
    let percent=0;
    if(listsData.length){
      percent=((currentIndex+1)/listsData.length)*100;
    }
    return percent;
  }
  render() {
    let {history}=this.props;
    let {listsData,currentIndex}=this.state;
    let currentQuestion={};
    let currentSelect=[];
    if(listsData[currentIndex]){
      currentQuestion=listsData[currentIndex];
      currentSelect=currentQuestion.testAnswerDtos;
    }
    //当作vue里面的计算属性用
    let percent=this.percentFun();
    let lastHasSelected=this.lastHasSelectedFun();
    let isOver=this.isOverFun();

    let indexX="";
    let len=listsData.length;
    //二位的时候
    if(len<9){
      indexX=currentIndex+1;
    }
    else if(len>9 && len<100){
       indexX=currentIndex<9 ? "0"+(currentIndex+1):(currentIndex+1);
    }
    //最高支持三位
    else{
        indexX="00"+(currentIndex+1);
    }
    let title=`测试题(${indexX}/${listsData.length})`;

    return (
      <div>
        <Header title={title} history={history}/>
        <Progress percent={percent} position="fixed"  style={{marginTop:"0.45rem"}}/>
        <div className={"p30"}>
            <div className={"mb30"}>
               <h2 className={"fz18"}>
                 {indexX}、{currentQuestion.content}
               </h2>
              {
                currentQuestion.image &&  <div className={"mt20"}>
                  <img src={currentQuestion.image} alt="" className={"w100p"}/>
                </div>
              }
            </div>
          <div>
            <ul>
              {
                currentSelect.map((item,index)=>{
                  return  <li className={"df mb30"} onClick={()=>this.checkFun(index+1,item.jumpAnsId,currentQuestion.questionNo)} key={index}>
                    <div className={"w30"}>{item.answerNo}、</div>
                    <div className={"fz15 fx1"}>{item.content}</div>
                    <div className={"w40 tar"}>
                      <div className={"h15 w15 bdrs50p bd1 dib smallBot tac df aic jcc"}>
                        {item.isChecked &&  <span className={"bg-white dib bdrs50p smallBot2"}></span>}
                      </div>
                    </div>
                  </li>
                })
              }
            </ul>
          </div>
          {/*第一题*/}
          {
            (()=>{
              //并且题目长度不等于1
              if(currentIndex===0 && listsData.length!==1){
                return <div className="tac">
                  <Button type="primary" className={"w50p mauto"} disabled>查看结果</Button>
                </div>
              }
              else if(!isOver || !lastHasSelected){
                return  <div className={"df"}>
                  <div className={"w50p pr20"}>
                    <Button type="primary" onClick={()=>this.previousQuestion()}>上一题</Button>
                  </div>
                  <div className={"w50p pl20"}>
                    <Button type="primary" disabled>查看结果</Button>
                  </div>
                </div>
              }
            })()
          }
          {/*最后一题已经选中*/}
          {
            (()=>{
              if(isOver && lastHasSelected){
                return  <div className={"df"}>
                  <div className={"w50p pr20"}>
                    <Button type="primary" onClick={()=>this.previousQuestion()}>上一题</Button>
                  </div>
                  <div className={"w50p pl20"}>
                    <Button type="primary" onClick={this.submit}>查看结果</Button>
                  </div>
                </div>
              }
            })()
          }
          <WhiteSpace />
        </div>
        <div className={"blank"}></div>
        <Footer/>
      </div>
    );
  }
}
