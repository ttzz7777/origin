import React, { Component } from 'react'
// this有问题的写法
export default class App13 extends Component {
  handler() {
    console.log(this)
  }

  render() {
    // render函数中的this已经被react内部做了修正
    // 这里的this就是指向当前的组件实例对象
    // 那我们箭头函数中的this直接沿用 所以也是指向组件的实例对象
    console.log('父级函数中的this指向为:', this)
    return (
      // 如果不通过constructor做修正 直接可以在事件绑定的位置
      // 通过箭头函数的写法 直接沿用父函数中的this指向也是ok的
      <button onClick={() => this.handler()}>click</button>
    )
  }
}
