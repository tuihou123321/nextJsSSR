/**
 * Created by mqd on ${DATE}.
 */
import React, { Component } from 'react';
import { Toast} from 'antd-mobile';
import Header from "../../Components/Header/Header";
import {getTestLists,getTestCategories} from "../../api/api"
import Nav from "../../Components/Nav/Nav"
import TestLists from "../../Components/TestLists/TestLists"
import UserListsWrap from "../../Components/UserListsWrap/UserListsWrap"
import $ from "jquery"

export default class Test extends Component {
  state = {
    listsData:[],
    tabs:[],
    page:1,
    pageSize:10,
    loading: true,
    total:null
  };
  loadMore=(id)=>{
    this.setState({loading:false})
    let {page,pageSize}=this.state;
    let param={
      page,
      pageSize,
      cateId:id   //类型id
    }
    Toast.loading("加载中...",0)
    getTestLists(param,(result)=>{
      let {list,total}=result;
      let {listsData}=this.state;
      if(list.length>0){
        ++page;
        //合并两个数组；
        listsData=listsData.concat(list);
      }
      this.setState({
        loading: true,
        listsData,
        page,
        total   //总数量
      });
      Toast.hide();
    },()=>{
      Toast.hide();
    })
  }
  loadMoreFun(){
    $(window).on("scroll",()=>{
      let height = $(document).height()-$(window).height()-$(window).scrollTop();  //页面的高度-显示屏幕的高度-滚动条的高度
      if (height<=10 && this.state.loading) {
        this.loadMore();
      }
    });
  }
  getListsData(id){
    this.setState({
      page:1,
      listsData:[]
    },()=>{
      this.loadMore(id);
    })
  }
  getTestCategories(){
    getTestCategories({},(result)=>{
      this.setState({
        tabs:result
      })
    })
  }
  componentDidMount(){
    this.getTestCategories();
    // this.loadMoreFun();
    this.loadMore();
  }
    render() {
      this.loadMoreFun();
      let {history}=this.props;
      let {listsData,tabs,loading,total}=this.state;
      //当全部加载完，取消绑定事件
      if( total===listsData.length){
        $(window).off("scroll");
      }
        return (
            <div>
                <Header title="心理测试" history={history}/>
                   <Nav tabs={tabs} getListsData={(id)=>this.getListsData(id)}/>
                  <div>
                    {TestLists(listsData,history)}
                  </div>
              { UserListsWrap(loading,total,listsData.length) }
            </div>
        );
    }
}
