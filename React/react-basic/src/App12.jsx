import React, { Component } from 'react'
// this有问题的写法
export default class App12 extends Component {
  constructor() {
    super()
    // 使用bind强行修正this指向
    // 相当于在类组件初始化的阶段 就可以把回调函数的this修正到
    // 永远指向当前组件实例对象
    this.handler = this.handler.bind(this)
  }

  handler() {
    console.log(this)
  }

  render() {
    return <button onClick={this.handler}>click</button>
  }
}
