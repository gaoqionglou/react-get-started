import './Frame.less'
import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Badge } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { adminRouter } from '../../routes'
import { Link, withRouter } from 'react-router-dom'

import logo from './logo.png'

const { Header, Content, Sider } = Layout;
const menu = adminRouter.filter(route => route.isNav === true)



class Frame extends Component {

    onDropdownMenuClick = ({key})=>{
        this.props.history.push(key)
    }
    onMenuClick = ({ item, key, keyPath, domEvent }) => {
        console.log(item, key, keyPath, domEvent)
        this.props.history.push(key)
    }
    render() {
        const mymenu = (
            <Menu onClick={this.onDropdownMenuClick}>
                <Menu.Item key='/admin/notifications'>
                    <Badge dot>通知中心</Badge>
                </Menu.Item>
                <Menu.Item  key='/admin/settings'>
                    个人设置
                </Menu.Item>
                <Menu.Item  key='/admin/quit'>
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
                            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>B</Avatar>
                            <span>Welcome! Bruce Wayne  </span>
                            <Badge count={10} offset={[-10, -10]}>  <DownOutlined /> </Badge>
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
export default withRouter(Frame)
