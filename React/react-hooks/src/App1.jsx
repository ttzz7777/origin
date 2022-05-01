// useState
// 1. 导入useState函数 react
// 2. 执行这个函数并且传入初始值 必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

//状态的读取和修改
// const [count, setCount] = useState(0)
// 1.函数useState传过来的参数 作为count的初始值
// 2.[count, setCount]这里的写法是一个解构赋值 useState返回值是一个数组
// 名字可以自定义吗？ -> 可以自定义保持语义化
// 顺序可以换吗？ -> 不可以的  第一个参数就是数据状态 第二个参数就是修改数据的方法
// 3. setCount函数 用来修改count 依旧保持不能直接修改原值而是生成一个新值替换原值
//  setCount（基于原值计算得到的新值）
// 4.count和setCount是一对，是绑在一起的 setCount只能用来修改对应的count值

// 组件的更新
// 当调用setCount的时候 更新过程

// 首次渲染
// 首次被渲染的时候组件内部的代码会被执行一次
// 其中useState也会跟着执行 这里重点注意 初始值只在首次渲染时生效

// 更新渲染 setCount
// 1. app组件会再次渲染 这个函数会再次执行
// 2. useState再次执行 得到的新的count值不是0而是修改后的1 模板会用新值渲染

// 重点一句话：useState初始值只在首次渲染生效 后续只要调用setCount整个app中的代码都会执行
// 此时的count每次拿到的都是最新值
import { func } from 'prop-types'
import React, { useState } from 'react'
export default function App1() {
  //count 数据状态
  //setCount 修改count的函数（专有函数）
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])
  function test() {
    setCount(count + 1)
    setFlag(false)
    setList([1, 2, 3])
  }
  return (
    <div>
      <button onClick={() => test()}>
        count:{count}
        <br />
        flag:{flag ? '1' : '0'}
        <br />
        {/* 通过指定分隔符分割 */}
        list:{list.join('-')}
      </button>
    </div>
  )
}
