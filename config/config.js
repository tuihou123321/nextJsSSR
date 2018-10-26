//配置接口地址
let urlLists=["mock","dev","pro"]
export let isDev=urlLists[0];

//配置路由模式
let  routerTypes=["hash","history"]
export let routerType=routerTypes[0]

export default {
  isDev,
  routerType
}
