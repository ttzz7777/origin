import React, { Component } from 'react'
// 通过类组件修改状态的方式 counter

export default class App11 extends Component {
  // 通过state定义组件状态
  state = {
    count: 0,
  }

  //事件回调函数
  changeCount = () => {
    // 修改state
    // react这个体系下'数据不可变' setState
    // value 永远都是上一次count值+1
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return <button onClick={this.changeCount}>{this.state.count}click</button>
  }
}
