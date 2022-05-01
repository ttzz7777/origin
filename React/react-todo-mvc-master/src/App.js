import { Input, Popconfirm, Space, Table } from 'antd'
import { AudioOutlined } from '@ant-design/icons'
import React from 'react'
import './App.css'
import axios from 'axios'
// 1.找到对应的组件 把页面搭起来
// 2.table渲染出来(发送请求(componentDidMount) 拿到数据 交给list (this.setState) )
// 3.删除功能（点击哪个用哪个id 调用删除接口 重新拉取列表）
// 4.搜索功能（拿到关键词 调用接口获取列表数据）
const { Search } = Input

class App extends React.Component {
  state = {
    //表格数据
    list: [],
    //列数据
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      },
      {
        title: '操作',
        render: (_, record) => (
          <Popconfirm
            onConfirm={() => this.delData(_, record)}
            title="Sure to delete?">
            <a>Delete</a>
          </Popconfirm>
        ),
      },
    ],
  }

  // 搜索
  onSearch = async (value) => {
    //搜索接口
    const res = await axios.get(`http://localhost:3001/data/?q=${value}`)
    this.setState({
      list: res.data,
    })
  }
  // 删除
  delData = async (_, record) => {
    console.log(_, record) // record.id
    //调用删除接口
    await axios.delete(`http://localhost:3001/data/${record.id}`)
    // 重新获取列表
    this.loadList()
  }
  // 加载列表  ★★★★★
  loadList = async () => {
    const res = await axios.get(`http://localhost:3001/data`)
    this.setState({
      list: res.data,
    })
  }

  componentDidMount() {
    this.loadList()
  }

  render() {
    return (
      <div className="container">
        {/* 搜索框 on打头的一般都是事件*/}
        {/* onSearch事件实在点击搜索/回车/清空时触发 value 当前输入框的值 */}
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />
        {/* table表格组件  依赖于两个必要数据 一个定义列 一个用来遍历渲染*/}
        <Table dataSource={this.state.list} columns={this.state.columns} />
      </div>
    )
  }
}

export default App
