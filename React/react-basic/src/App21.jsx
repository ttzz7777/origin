import React, { Component } from 'react'

function ListItem({ item, delItem }) {
  return (
    <>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.info}</p>
      <button onClick={() => delItem(item.id)}>删除</button>
    </>
  )
}

export default class App21 extends Component {
  state = {
    list: [
      {
        id: 1,
        name: '超级好吃的棒棒糖',
        price: 18.8,
        info: '开业大酬宾,全场8折',
      },
      {
        id: 2,
        name: '超级好吃的大鸡翅',
        price: 34.2,
        info: '开业大酬宾,全场8折',
      },
      {
        id: 3,
        name: '超级好吃的冰激凌',
        price: 14.2,
        info: '开业大酬宾,全场8折',
      },
    ],
  }
  delItem = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }
  render() {
    return (
      // render 里的return 必须得有一个div
      <div>
        {this.state.list.map((item) => (
          <ListItem key={item.id} item={item} delItem={this.delItem} />
        ))}
      </div>
    )
  }
}
