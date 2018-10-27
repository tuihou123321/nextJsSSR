/**
 * Created by mqd on ${DATE}.
 */
import React from 'react';
// import {Link} from "react-router-dom"
import Link from "next/link"


//代表是否是首页
export default function TestLists(lists,isIndex){
  return (
    <div className="bg-white lists2 bdb1-warp pr15 pl15">
      {
        lists.map((item,index)=>{
          return (
            <div  key={index}>
              <Link href={`/test/start/${item.id}`}>
                <a>
                <div className="df pb20 pt20">
                  <div className={"mr15"}>
                    <img src={item.cover} alt="" style={{width:"0.9rem",height:"0.9rem"}} className={"bdrs5"}/>
                  </div>
                  <div  className="itemRight mt5 rel db fx1">
                    <div className="b fz16 line2" style={{WebkitBoxOrient: "vertical"}}>
                      {item.name}
                    </div>
                    <div className={"abs b0"} style={{width:"2.3rem"}}>
                      {
                        !isIndex?<div className="c9"> 测试时间：{item.createTime}</div>:<div className="c9">{item.testNum}人测过</div>
                      }
                    </div>
                  </div>
                </div>
                </a>
              </Link>
            </div>
          )
        })
      }
      <style jsx>{`
        .lists2 .itemRight{
        border-bottom: 1px solid #dddddd !important;
      }
        .lists2 .itemRight:last-child{
        border-bottom: 0 !important;
      }
     `}</style>
    </div>
  );
}

