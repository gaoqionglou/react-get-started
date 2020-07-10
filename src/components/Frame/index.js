import './Frame.less'
import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Badge } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { adminRouter } from '../../routes'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import logo from './logo.png'
import { getTheNotifications } from '../../actions/notifications'
import { logout } from '../../actions/user'
const { Header, Content, Sider } = Layout;
const menu = adminRouter.filter(route => route.isNav === true)


const mapState = state => {
    return {
        notificationsCount: state.notifications.list.filter(item => item.hasRead === false).length,
        avatar: state.user.avatar,
        displayName: state.user.displayName
    }
}

class Frame extends Component {
    componentDidMount() {
        this.props.getTheNotifications()
    }

    onDropdownMenuClick = ({ key }) => {
        if (key === "/logout") {
            this.props.logout()
            console.log('logout')
        } else {
            this.props.history.push(key)
            console.log('no logout')
        }
    }
    onMenuClick = ({ item, key, keyPath, domEvent }) => {
        console.log(item, key, keyPath, domEvent)

        this.props.history.push(key)

    }
    render() {
        const mymenu = (
            <Menu onClick={this.onDropdownMenuClick}>
                <Menu.Item key='/admin/notifications'>
                    <Badge dot={Boolean(this.props.notificationsCount)}>通知中心</Badge>
                </Menu.Item>
                <Menu.Item key='/admin/settings'>
                    个人设置
                </Menu.Item>
                <Menu.Item key='/logout'>
                    退出
                </Menu.Item>
            </Menu>
        );
        const selectKeyArr = this.props.location.pathname.split('/')
        selectKeyArr.length = 3
        console.log(selectKeyArr.join('/'))
        return (
            <Layout style={{ minHeight: '100%' }}>
                <Header className="header v-header">
                    <div className="logo v-logo" >
                        <img src={logo} alt="logo" />
                    </div>
                    <Dropdown overlay={mymenu} >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar src={this.props.avatar}></Avatar>
                            <span>Welcome! {this.props.displayName}  </span>
                            <Badge count={this.props.notificationsCount} offset={[-10, -10]}>  <DownOutlined /> </Badge>
                        </div>
                    </Dropdown>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={[selectKeyArr.join('/')]}
                            onClick={this.onMenuClick}
                            style={{ height: '100%', borderRight: 0 }}
                        >


                            {
                                menu.map(route => {
                                    return (

                                        <Menu.Item key={route.pathname} icon={route.icon}>
                                            {route.title}</Menu.Item>

                                    )
                                })
                            }



                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '10px 10px 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                backgroundColor: '#FFF',
                                borderRadius: 5
                            }}
                        >
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}
export default withRouter(connect(mapState, { getTheNotifications, logout })(Frame))
