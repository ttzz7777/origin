import { Card, message } from 'antd'
import logo from '@/assets/logo.png'
import './index.scss'
import { useStore } from '@/store'
import { Form, Input, Button, Checkbox } from 'antd'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const { loginStore } = useStore()
  const navigate = useNavigate()
  async function onFinish(value) {
    // value：里面放置的是所有表单项中用户输入的内容
    // todo：登录
    await loginStore.getToken({
      mobile: value.username,
      code: value.password,
    })
    console.log('Success:', value)
    // 跳转首页
    navigate('/', { replace: true })
    // 提示用户
    message.success('登陆成功')
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        {/* 子项用到的触发事件 需要在Form中都声明一下才可以 */}

        <Form
          validateTrigger={['onBlur', 'onChange']}
          initialValues={{
            remember: true,
            password: '246810',
          }}
          onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '请输入手机号!',
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号',
                validateTrigger: 'onBlur',
              },
            ]}>
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
              {
                len: 6,
                message: '请输入六位密码',
                validateTrigger: 'onBlur',
              },
            ]}>
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>

          <Form.Item>
            {/* <!-- 渲染Button组件为submit按钮 --> */}
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
export default Login
