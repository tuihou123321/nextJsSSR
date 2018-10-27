/**
 * Created by mqd on ${DATE}.
 */
import React from 'react';

export default function Footer(){
      return (
          <div className="bg-white">
              <footer className="tac pt40 pb20">
                  <div className="mb20 fz15">
                      <p>由壹点灵心理服务平台提供技术支持</p>
                      <p>服务热线：<span className="blue b fz16">400-114-1010</span></p>
                      <p className="fz11 grey">(工作时间：当日8:30-次日2:00)</p>
                  </div>

                  <div className="tac">
                      <div className="dib p5 bd1 mb20 fz12 tac">
                          <img src="/static/images/code.png" alt="" style={{width:"1.23rem"}}/>
                          <p>客服微信，随时解答</p>
                      </div>
                  </div>
                  <div className="grey fz11 mb20">
                      <p> © 2015 - 2018上海袋虎信息技术有限公司</p>
                      <p> 沪ICP备15037258号</p>
                  </div>
              </footer>
          </div>
      );
}
