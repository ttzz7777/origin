import React from 'react'
import { useLocalStorage } from './hooks/useLocalStorage'
export default function App4() {
  const [message, setMessage] = useLocalStorage('hook-key', '阿菲')
  setTimeout(() => {
    setMessage('cp')
  }, 5000)
  return <div>{message}</div>
}
