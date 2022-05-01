import React, { Component } from 'react'
// App 父组件 son 子组件

//函数式的Son
// function SonF(props) {
//   // props是一个对象， 里面存着通过父组件传出的所有数据
//   // 解构赋值可以吗？会有什么影响？可以解构
//   const { list, userInfo, getMsg, child } = props
//   return (
//     <div>
//       我是函数子组件,
//       {list.map((item) => (
//         <p key={item}>{item}</p>
//       ))}
//       {userInfo.name}
//       <button onClick={() => getMsg()}>触发父组件传入的函数</button>
//       {child}
//     </div>
//   )
// }

function SonF({ list, userInfo, getMsg, child }) {
  return (
    <div>
      我是函数子组件,
      {list.map((item) => (
        <p key={item}>{item}</p>
      ))}
      {userInfo.name}
      <button onClick={() => getMsg()}>触发父组件传入的函数</button>
      {child}
    </div>
  )
}
//这里写的就是原生的函数语法 props也是一个普通的js对象
// 所有原生支持的写法 这里都是可以的 放心大胆的写

//类组件的Son
class SonC extends Component {
  render() {
    // 类组件必须通过this关键词去获取，这里的props是固定的
    return <div>我是类子组件,{this.props.msg}</div>
  }
}

export default class App17 extends Component {
  // 准备数据
  state = {
    list: [1, 2, 3],
    userInfo: {
      name: 'cp',
      age: 30,
    },
  }
  getMsg = () => {
    console.log('父组件中的函数')
  }
  render() {
    return (
      <div>
        {/* 子组件身上绑定属性，属性名可以自定义 保持语义化 */}
        <SonF
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<span>this is span</span>}
        />
        <SonC msg={this.state.message} />
      </div>
    )
  }
}
