import React, { Component, createContext } from 'react'
// App -> A -> C
// App数据 -> C
// 注意事项：
// 1.上层组件和下层组件关系是相对的只要存在就可以使用 通常我们都会通过app作为数据提供方
// 2.这里设计道德语法都是固定的，有两处，提供的位置value提供数据 获取的位置（value=>使用value想干啥就干啥）
// 导入createContext方法并执行，解构提供者和消费者
const { Provider, Consumer } = createContext()

function ComA() {
  return (
    <div>
      this is ComA
      <ComC />
    </div>
  )
}

function ComC() {
  return (
    <div>
      this is ComC
      {/* 通过consume使用数据 */}
      <Consumer>{(value) => <span>{value}</span>}</Consumer>
    </div>
  )
}

export default class App20 extends Component {
  state = {
    message: 'this is message',
  }
  render() {
    return (
      //使用provider包裹根组件
      <Provider value={this.state.message}>
        <div>
          <ComA />
        </div>
      </Provider>
    )
  }
}
