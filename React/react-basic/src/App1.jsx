import React from 'react'
// React 如何完成列表渲染
//技术方案 map 重复渲染的是哪个模板 就return谁
//注意事项：遍历列表时同样需要一个类型为number/string不可重复的key 提高diff性能
//key仅仅在内部是，不会出现在真实的dom结构中

const songs = [
    {id:1,name:'痴心绝对'},
    {id:2,name:'向我这样的人'},
    {id:3,name:'南山南'}
]

export default function App1() {
  return (
    <div>
        <ul>
            {songs.map(song =><li key={song.id}>{song.name}</li>)}
        </ul>
    </div>
  )
}
