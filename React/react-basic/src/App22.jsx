import React, { Component } from 'react'
// 渲染列表
function ListItem({ children }) {
  return <div>{children}</div>
}

export default class App22 extends Component {
  render() {
    return (
      <div>
        <ListItem>
          {/* 1. 普通文本
              2. 普通标签元素
              3. 函数
              4. JSX
          */}
          <h3>this is child</h3>
          {/* {() => console.log('123')} */}
          {
            <div>
              <p>{'this is p'}</p>
            </div>
          }
        </ListItem>
      </div>
    )
  }
}
