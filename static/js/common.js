export function getLocal(params){
  let data={}
  if(localStorage){
    let userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      let {accessToken,uid} = JSON.parse(userInfo);
      data.accessToken=accessToken;
      data.uid=uid;
    }
    let appId=localStorage.getItem("appId");
    if(appId){
      data.appId=appId;
    }
  }
  if(!params || params==={}){
    return data;
  }
  return {params,...data}
}

export let Cookie={
  //设置cookie值及过期时间；
  set:(name,value,time=10000)=>{
    let oDate=new Date();
    oDate.setDate(oDate.getDate()+time);
    document.cookie=name+'='+value+';expires='+oDate;
  },
  get:(name)=>{
    let cookie=document.cookie;
    let arr=cookie.split(";");
    for(let i=0;i<arr.length;i++){
      let arr2=arr[i].split("=");
      if($.trim(arr2[0])==name){
        return arr2[1];
      }
    }
  },
  remove:(name)=>{
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval=getCookie(name);
    if(cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
  }
}

export function getData(ctx,name){

}



