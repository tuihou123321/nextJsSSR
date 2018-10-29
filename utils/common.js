import {routerType} from "../config/config";
import $ from "jquery"
import {isDev} from "../config/config"

export function removeBlank(str){
  if(str){
    str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
    str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    str=str.replace(/ /ig,'');//去掉
    str=str.replace(/^[\s　]+|[\s　]+$/g, "");//去掉全角半角空格
    str=str.replace(/[\r\n]/g,"");//去掉回车换行
    str=str.replace(/\$\$/gi,"");
  }
    return str;
}

export function checkPhone(str){
    //去掉空格
    str=removeBlank(str);
    let re = /^1[2|3|4|5|7|8][0-9]{9}$/;
    if(re.test(str)){
        //手机号通过
        return true;
    }
    else if(str===""){
        //手机号不能为空
        return false;
    }
    else{
        //手机号错误
        return false;
    }
}

//只能包含字母和数字
export function checkPassword(value){
  let jgpattern =/^[A-Za-z0-9]+$/;
  if(!jgpattern.test(value)){
    return false;
  }
  else{
    return true
  }
}


export function getCompanyPY(){
  //判断是不是本地调试环境
  if(process.env.NODE_ENV !== 'production'){
    return "geely";
  }
}

export function delHtmlTag(str)
{
  //去掉所有的html标记
  if(str){str=str.replace(/<[^>]+>/g,"");}
  str=str.replace(/&nbsp;/gi,"")
  str = str.replace(/\s+/g,"");
  str=removeBlank(str);
  return str;
}

//阻止浏览器的默认行为
export function stopDefault( e ) {
  //阻止默认浏览器动作(W3C)
  if ( e && e.preventDefault )
    e.preventDefault();
  //IE中阻止函数器默认动作的方式
  else
    window.event.returnValue = false;
  return false;
}

//判断用户是不是IOS手机
export function isIOS(){
  let a=false;
  if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
     a = true;
  }
  return a;
}
//从右到左依次算
export function getLastParam(url){
  if(!url){url=window.location.href;}
  return  url.split("?")[0].split("/").reverse()[0];
}

//转换成时/分/秒
function changeTimeType(arr){
  let a="";
  if(arr[0]!==0){
    a=arr[0]+"时"
  }
  if(arr[1]!=="00"){
    a+=arr[1]+"分"
  }
  if(arr[2]!=="00"){
    a+=arr[2]+"秒"
  }
  return a;
}

export  function formatSeconds(value,isTest) {
  let secondTime = parseInt(value);// 秒
  let minuteTime = 0;// 分
  let hourTime = 0;// 小时
  if(secondTime > 60) {//如果秒数大于60，将秒数转换成整数
    //获取分钟，除以60取整数，得到整数分钟
    minuteTime = parseInt(secondTime / 60);
    //获取秒数，秒数取佘，得到整数秒数
    secondTime = parseInt(secondTime % 60);
    //如果分钟大于60，将分钟转换成小时
    if(minuteTime > 60) {
      //获取小时，获取分钟除以60，得到整数小时
      hourTime = parseInt(minuteTime / 60);
      //获取小时后取佘的分，获取分钟除以60取佘的分
      minuteTime = parseInt(minuteTime % 60);
    }
  }
  if(minuteTime<10){
    if(minuteTime===0){
      minuteTime="00";
    }
    else{
      minuteTime="0"+minuteTime;
    }
  }
  if(secondTime<10){
    if(secondTime===0){
      secondTime="00";
    }
    else{
      secondTime="0"+secondTime;
    }
  }
  let result="";
  if(isTest){
    let arr=[hourTime,minuteTime,secondTime];
    result=changeTimeType(arr);
  }
  else{
    if(hourTime!==0){
      hourTime=hourTime+":";
    }
    else{
      hourTime="";
    }
     result=hourTime+minuteTime+":"+secondTime;
  }
  return result;
}



export let noShowFooterNav=["/confide/detail","/confide/calling","/course/detail"];

export function scrollToBottom(){
  let h=$(document).height()-window.innerHeight
  $(document).scrollTop(h);
}

export function tagsLimit(tags,maxNum){
    if(tags.length>maxNum){
      //含有多个标签
      if(tags.indexOf(",")>0){
        let tagsArr=tags.split(",");
        //当arr[index]<20,arr[index+1]>20时取出index的值
        let length=tagsArr.length;
        let bb="";
        let indexX=0;
        for(let i=0;i<length;i++) {
          bb =bb+ ","+tagsArr[i];
          if (bb.length > maxNum) {
            indexX = i;
            break;
          }
        }
        tagsArr=tagsArr.slice(0,indexX)
        tags=tagsArr.toString();
      }
      else{
        tags="";  //如果只有一个标签，那一个也不展示
      }
    }
  return tags;
}

export default {
    checkPhone,
    removeBlank,
    getCompanyPY,
    delHtmlTag,
    stopDefault,
    getLastParam,
    isIOS,
    checkPassword,
   scrollToBottom
}
