import './Frame.less'
import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

import { adminRouter } from '../../routes'
import { Link, withRouter } from 'react-router-dom'

import logo from './logo.png'
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const menu = adminRouter.filter(route => route.isNav === true)


class Frame extends Component {
    onMenuClick = ({ item, key, keyPath, domEvent }) => {
        console.log(item, key, keyPath, domEvent)
        this.props.history.push(key)
    }
    render() {
        return (
            <Layout style={{ minHeight: '100%' }}>
                <Header className="header v-header">
                    <div className="logo v-logo" >
                        <img src={logo} alt="logo" />
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            selectedKeys={[ this.props.location.pathname]}
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
