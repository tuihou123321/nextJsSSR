import React, { Component } from 'react';
import { Drawer, List, NavBar, Icon,Button } from 'antd-mobile';
import {NavLink} from "react-router-dom"
import classNames from "classname"
// import "./RightNav.css"
import ReactSVG from "react-svg"
import {stopDefault} from "../../utils/common"
import {navLists,navListsB} from "../../enums/enums"
// import {exit} from "../../api/api"

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }
  state = {
    open: false
  }
  onOpenChange = (...args) => {
    this.setState({ open: !this.state.open });
  }
  exit(ev){
    stopDefault(ev);
    console.log("成功退出");
    // exit({},()=>{
    //   localStorage.clear();
    //   this.props.history.push("/");
    // });
  }
  render() {
    let {history,title,border,bg}=this.props;
    let jcl="";
    if(title){
      jcl=title.length>12?true:false;
    }
    let itemClasses = classNames({
      bdb1: border,
      jcl:jcl
    });
    let itemClasses3 = classNames({
      bdb1: border,
      white:true,
      jcl:jcl
    });

    let boxFix={
      position:!bg?"fixed":"absolute",
      zIndex: "100",
      width: "100%",
      top: "0",
    }

    // let hasActicle= localStorage.getItem("hasActicle");
    let hasActicle=null;
    let navListsShow=navLists;
    if(!hasActicle){
      navListsShow=navListsB;
    }

    const sidebar = (
      <div>
        <List renderHeader={() => <div className="db tar"><Icon type="cross" className="active fz18" onClick={this.onOpenChange}/></div>}>
          {
            navListsShow.map((item, index) => {
              return (
                <NavLink exact to={item.url}
                         className="db"
                         activeClassName="active"
                         key={index}
                >
                  <List.Item extra="" arrow="horizontal" onClick={() => {}}>{item.title}</List.Item>
                </NavLink>
              );
            })
          }
          <NavLink exact to="/"
                   className="db"
                   activeClassName="active"
          >
            <List.Item extra="" arrow="horizontal" onClick={(ev)=>this.exit(ev)}>退出</List.Item>
          </NavLink>
        </List>
        <div className="tac" style={{marginTop:"2.2rem"}}>
          <Button type="default" style={{width:"1.5rem"}} className="dib" onClick={()=>{window.open("https://dat.zoosnet.net/LR/Chatpre.aspx?id=DAT83236505&cid=1526984497641643927573&lng=cn&sid=1528804057997664646634&p=http%3A//www.yidianling.com/ask/t1/&rf1=http%3A//www.yidianling&rf2=.com/ask/t1/p2&msg=&d=1528859512932")}}>
            联系客服
          </Button>
        </div>
      </div>);

    return (
      <div>
        <div style={boxFix}>
          {
            !bg?<NavBar
              mode="light"
              icon={<Icon type="left" size="lg"/>}
              onLeftClick={() =>{history.goBack()}}
              rightContent={
                <span onClick={this.onOpenChange} style={{paddingTop:"0.05rem"}}>
                                {/*<Icon key="0" type="ellipsis"/> */}
                  <ReactSVG
                    path={"/static/images/nav.svg"}
                    // callback={svg => console.log(svg)}
                    svgStyle={{ width: "0.3rem",height:"0.3rem",color:"#108ee9 !important",borderColor:"#108ee9" }}
                    svgClassName=""
                    className="example"
                  />
                              </span>
              }
              className={itemClasses}
            >{title}</NavBar>:<NavBar
              mode="light"
              icon={<Icon type="left" className="white" size="lg"/>}
              onLeftClick={() =>{history.goBack()}}
              rightContent={
                <span onClick={this.onOpenChange} style={{paddingTop:"0.05rem"}}>
                                {/*<Icon key="0" type="ellipsis"/> */}
                  <ReactSVG
                    path={"/static/images/nav2.svg"}
                    // callback={svg => console.log(svg)}
                    svgStyle={{ width: "0.3rem",height:"0.3rem",color:"#108ee9 !important",borderColor:"#108ee9" }}
                    svgClassName=""
                    className="example"
                  />
                              </span>
              }
              style={{background:"none",color:"white"}}
              className={itemClasses3}
            ><span className="white">{title}</span></NavBar>
          }
          {
            this.state.open && (
              <Drawer
                className="my-drawer"
                style={{ minHeight: document.documentElement.clientHeight }}
                enableDragHandle={true}
                // docked="true"
                position="right"
                contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
                sidebar={sidebar}
                open={this.state.open}
                onOpenChange={this.onOpenChange}
              >
                .
              </Drawer>
            )
          }
        </div>
        {
          !bg && <div className={"h45"}></div>
        }
        <style jsx>{`
          .my-drawer {
          position: relative;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }
          .my-drawer .am-drawer-sidebar {
          background-color: #fff;
          overflow: auto;
          -webkit-overflow-scrolling: touch;
        }
          .my-drawer .am-drawer-sidebar .am-list {
          width: 300px;
          padding: 0;
        }

          .am-drawer.am-drawer-left .am-drawer-draghandle, .am-drawer.am-drawer-right .am-drawer-draghandle {
          width: 0 !important;
        }
          .active>.am-list-item .am-list-line .am-list-content{
          color:#3d9eff;
        }
       `}</style>
      </div>
    );
  }
}
