import { useStore } from './store/index'
import { observer } from 'mobx-react-lite'
function App() {
  // 注意： 解构赋值 到store实例对象就可以了
  // 防止破坏响应式 用哪个store就解构哪个store
  const { CounterStore, ListStore } = useStore()
  return (
    <div>
      {CounterStore.count}
      <button onClick={CounterStore.addCount}>+</button>
    </div>
  )
}

// 3. 包裹App
export default observer(App)
