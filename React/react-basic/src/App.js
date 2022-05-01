// 1.识别常规的变量
// 2.原生js方法调用
// 3.三元运算符（常用）
const name = '我是th'
const getAge = () => 18
const flag = true

function App() {
  return (
    <div className="App">
      {name}
      <br />
      {getAge()}
      <br />
      {flag ? '真棒' : '真菜'}
    </div>
  )
}

export default App;
