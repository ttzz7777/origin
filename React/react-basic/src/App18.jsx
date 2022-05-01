import React, { Component } from 'react'
//App Son
//父传子 props 函数
//子传父 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参
//传入即可

function Son(props) {
  const { getSongMsg } = props
  function clickHandler() {
    getSongMsg('这里是来自子组件的数据')
  }
  return (
    <div>
      this is Son
      <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default class App18 extends Component {
  // 准备数据
  state = {
    list: [1, 2, 3],
  }

  // 1. 准备一个函数 传给子组件
  getSongMsg = (sonMsg) => {
    console.log(sonMsg)
  }
  render() {
    return (
      <div>
        <Son getSongMsg={this.getSongMsg} />
      </div>
    )
  }
}
