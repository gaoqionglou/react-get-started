import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'
import { doLogin } from '../../actions/user'
import './login.less'
import { Redirect } from 'react-router-dom';

const wrapperCols = {
    span: 12,
    offset: 6
}
const mapState = state => ({
    isLogin: state.user.isLogin,
    isLoading: state.user.isLoading
})
class Login extends Component {
    onFinish = values => {
        console.log('Received values of form: ', values);

        this.props.doLogin(values)
    };
    render() {
        console.log(this.props.isLogin)
        return (
            this.props.isLogin ?
                <Redirect to='/admin' />
                :
                <Card title="Admin 登录" className='v-login-wrapper'>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input disabled={this.props.isLoading} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                disabled={this.props.isLoading}
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                忘记密码
        </a>
                        </Form.Item>

                        <Form.Item>
                            <Button loading={this.props.isLoading} type="primary" htmlType="submit" className="login-form-button">
                                登录
        </Button>
        Or <a href="">马上注册!</a>
                        </Form.Item>
                    </Form>
                </Card>
        )
    }
}
export default connect(mapState, { doLogin })(Login)