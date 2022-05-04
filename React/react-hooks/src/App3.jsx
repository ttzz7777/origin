import React from 'react'
import { useWindowScroll } from './hooks/useWindowScroll'
export default function App3() {
  const [y] = useWindowScroll()

  return <div style={{ height: '12000px' }}>{y}</div>
}
