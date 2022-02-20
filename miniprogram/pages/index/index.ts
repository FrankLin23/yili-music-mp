// index.ts

import { sayHello } from "../../api/hello"

// 获取应用实例

Page({
  data: {
    message: 'Hello World'
  },
  // 事件处理函数
  onLoad() {
   
  },
  hi() {
    sayHello().then(res => {
      console.log(res);
    })
  }
})
