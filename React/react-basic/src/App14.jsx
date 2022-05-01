import React, { Component } from 'react'

export default class App14 extends Component {
  // 1.声明一个用来控制input value的react组件自己的状态
  state = {
    message: 'this is message',
  }
  //回调函数
  inputChange = (e) => {
    console.log('change 事件触发了', e)
    // 4. 拿到输入框最新的值 交给state中的message
    this.setState({
      message: e.target.value,
    })
  }
  render() {
    return (
      // 2. 给input框的value属性绑定 react state
      // 3. 给input框绑定一个change的事件 为了拿到当前输入框中的数据
      <input
        type="text"
        value={this.state.message}
        onChange={this.inputChange}
      />
    )
  }
}
