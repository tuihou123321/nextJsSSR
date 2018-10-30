/**
 * Created by mqd on 2018/6/3.
 */
import React, {Component} from 'react';
import { NavBar,InputItem,Button,WhiteSpace,Toast } from 'antd-mobile';
import {checkPhone,getCompanyPY,removeBlank,scrollToBottom} from "../../utils/common"
// import {getCompanyInfo,getLogin} from "../../api/api"
import { imgUrl, http, setShare } from '@utils'
import Router from 'next/router'

import {
  ErrorFetch,
  Header,
  FooterSmall
} from '@components'
import {Cookie} from "../../static/js/common";

export default  class Login extends Component {
    state = {
      companyName:"",
      companyLogo:"",
      companyManager:"",
      hasError: false,
      hasError2: false,
      phone: '',
      password:"",
      passwordInfo:false,
      isLogining:false, //是否正在加载中
      appId:""
    }
    onErrorClick = () => {
        if (this.state.hasError) {
        }
    }
    onChange = (phone) => {
      if(phone.length>11){
        return;
      }
      this.setState({
        phone,
        hasError:false
      });

    }
    onChange2 = (password) => {
        this.setState({
            password,
            hasError2:false
        });
    }
    login=()=>{
        let {phone,password,isLogining,appId}=this.state;
        if(!checkPhone(phone)){
            // Toast.info("手机号格式不正确",2)
            this.setState({
                hasError:true
            })
            return
        }
        else if(password.length<6 || password.length>16){
            this.setState({
                hasError2:true
            })
            // Toast.info("密码格式不正确",2)
            return
        }
        //判断之前的请求是否处理完
        if(isLogining){
            return;
        }
        this.setState({
            isLogining:true
        },async ()=>{
            let params={
                phone:removeBlank(phone),  //去掉空格
                password,
                company:getCompanyPY()
            }
           Toast.loading("加载中...",0)
            //用户开始登陆
          const homeFetch = await http.post('/user/login', params, null,{isNew:true})
          console.log(homeFetch);
          const result = homeFetch.data

          //存在cookies里面
          Cookie.set("userInfo",JSON.stringify(result));
          Cookie.set("appId",appId);

          Toast.hide();
          this.setState({
            isLogining:false
          })
          Router.push("/");
        })
    }
    componentDidMount(){
        let companyPY=getCompanyPY();
    }
  resetPassswordFun=()=>{
      let {phone}=this.state;
      if(phone){
        sessionStorage.setItem("paramPhone",phone);
      }
      this.props.history.push("/reset")
  }
    render() {
        // let {} = this.props;
        let{companyName,companyLogo,companyManager,passwordInfo}=this.state;
        let {login}=this;
        return (
            <div>
                <NavBar
                    mode="light"
                    // icon={<Icon type="left" />}
                    // onLeftClick={() => window.history.back()}
                    style={{borderBottom:"1px solid #eee"}}
                >登录</NavBar>

                <div className="p20 mt30">
                    <div className="tac mb40">
                      {
                        companyLogo && <img src={companyLogo} alt="" style={{height:"0.6rem"}}/>
                      }

                        <h3>
                            {companyName}
                        </h3>
                    </div>
                <div>
                    <InputItem
                        type="tel"
                        placeholder="请输入手机号码"
                        error={this.state.hasError}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange}
                        value={this.state.phone}
                        onFocus={scrollToBottom}
                    />
                    <WhiteSpace/>
                    <InputItem
                        type="password"
                        placeholder="请输入密码"
                        error={this.state.hasError2}
                        onErrorClick={this.onErrorClick}
                        onChange={this.onChange2}
                        value={this.state.password}
                        style={{paddingBottom:"8px"}}
                        onFocus={scrollToBottom}
                    />
                    <p></p>
                    {
                        !passwordInfo?null:(<p style={{paddingLeft:"15px",color:"#ff5b06"}}>
                            *请设置6-16位，英文或数字组合的密码
                        </p>)
                    }

                </div>
                <div className="mb30 tar mt10">
                     <div onClick={this.resetPassswordFun} className="blue">找回密码</div>
                </div>
                <div>
                    <Button type="primary" onClick={login}>登录</Button>
                    <p className="tac c3 mt10">
                        企业管理员：{companyManager}
                    </p>
                </div>
                </div>
              <div style={{marginTop:"1.4rem"}}>
                {/*{FooterSmall()}*/}
              </div>
            </div>
        );
    }
}
