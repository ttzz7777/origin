import React, { useEffect, useRef } from 'react'

// 获取组件实例 类组件
// dom对象 标签

class TestC extends React.Component {
  state = {
    name: 'test name',
  }
  getName = () => {
    return 'this is child Test'
  }
  render() {
    return <div>我是类组件</div>
  }
}

export default function App8() {
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    console.log(testRef.current)
    console.log(h1Ref.current)
  }, [])
  // useEffect回调 是在dom渲染之后执行
  return (
    <div>
      <TestC ref={testRef} />
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  )
}
