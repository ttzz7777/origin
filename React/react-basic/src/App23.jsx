import React, { Component } from 'react'
// 里面有各种各样的内置的校验规则
// 类组件默认值 1.defaultProps  2. static类静态属性定义
import PropTypes from 'prop-types'

function Test() {
  return <div>{this.props.pageSize}</div>
}
Test.propTypes = {
  //记者首字母小写
  // 定义各种规则
  list: PropTypes.array.isRequired, //限定这里的list参数的类型必须是数组类型
}

export default class App23 extends Component {
  render() {
    return (
      <div>
        <Test pageSize={20} />
      </div>
    )
  }
}
