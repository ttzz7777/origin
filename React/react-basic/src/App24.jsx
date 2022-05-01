import React, { Component } from 'react'

// 挂载阶段  constructor->render->componentDidMount
// 更新阶段  render->componentDidUpdate
// 卸载阶段

class Test extends Component {
  // 如果数据是组件的状态需要去影响视图 定义到state中
  // 而如果我们需要的数据状态 不和视图绑定 定义成一个普通的实例属性就可以
  // state中尽量保持精简
  timer = null
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log('定时器开启')
    }, 1000)
  }
  componentWillUnmount() {
    //组件卸载(从页面中消失)  执行清理工作(比如：清理定时器等)
    console.log('componentWillUnmount')
    // 清理定时器
    clearInterval(this.timer)
  }
  render() {
    return <div>test</div>
  }
}

export default class App24 extends Component {
  constructor() {
    //创建组件时，最先执行，初始化的时候只执行一次
    super()
    console.log('constructor')
  }
  componentDidMount() {
    //组件挂载(完成DOM渲染)后执行，初始化的时候执行一次
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    //组件更新后(DOM渲染完毕)  DOM操作，可以获取到更新后的DOM内容，不要直接调用setState
    console.log('componentDidUpdate')
  }
  state = {
    count: 0,
    flag: true,
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
      flag: !this.state.flag,
    })
  }
  render() {
    //每次组件渲染都会触发  注意：不能在里面调用setState()
    console.log('render')
    return (
      <div>
        this is div
        <button onClick={this.clickHandler}>{this.state.count}</button>
        {/* 通过一个数据状态的切换 让Test组件进行销毁重建 就会发生组件卸载 */}
        {this.state.flag ? <Test /> : null}
      </div>
    )
  }
}
