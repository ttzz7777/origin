import React, { useEffect, useState } from 'react'

function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了')
    }, 1000)
    return () => {
      //清理的动作
      clearInterval(timer)
    }
  }, [])
  return <div>this is test</div>
}
export default function App6() {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {flag ? <Test /> : null}
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  )
}
