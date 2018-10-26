/**
 * Created by mqd on ${DATE}.
 */
import React, { PureComponent } from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';

export default class  Nav extends PureComponent{
  constructor(props, context) {
    super(props, context);
  }
  state={
  }
  getListsData=(id)=>{
    this.props.getListsData(id,true);
  }
  renderContent = item =>{
    return null;
  }
  componentDidUpdate(){
  }
  render() {
    let {tabs}=this.props;
    if(tabs.length===0){
      return false;
    }
    tabs.forEach(item=>{
      if(item.catName){
        item.title=item.catName;
      }
      else{
        item.title=item.name;
      }
    })
    return (
      <div>
        <WhiteSpace />
        <Tabs tabs={tabs} onTabClick={(item)=>{this.getListsData(item.id)}}>
        </Tabs>
      </div>
    );
  }
}

