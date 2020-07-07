import { Artical, Home, User, ArticalDetail, NotFound, Login, Dashboard, ArticleList, ArticleEdit, Settings,Notifications } from '../views'
import React from 'react'
import { DashboardOutlined, UnorderedListOutlined, SettingOutlined } from '@ant-design/icons';
export const mainRouter = [
    { pathname: '/login', component: Login }
    , { pathname: '/404', component: NotFound },

]


export const adminRouter = [{
    pathname: '/admin/dashboard',
    component: Dashboard,
    title: '仪表盘',
    icon: <DashboardOutlined />,
    isNav: true,
    roles: ['001', '002', '003']
}, {
    pathname: '/admin/article',
    component: ArticleList,
    title: '文章管理',
    icon: <UnorderedListOutlined />,
    isNav: true,
    exact: true,
    roles: ['001', '002']
}, {
    pathname: '/admin/article/edit/:id',
    component: ArticleEdit,
    roles: ['001', '002']
},
{
    pathname: '/admin/notifications',
    component: Notifications,
    roles: ['001', '002', '003']
},
// , {
//     pathname: '/admin/noauth',
//     component: NoAuth,
//     roles: ['001', '002', '003']
// }, {
//     pathname: '/admin/profile',
//     component: Profile,
//     roles: ['001', '002', '003']
// }, 
{
    pathname: '/admin/settings',
    component: Settings,
    title: '设置',
    icon: <SettingOutlined />,
    isNav: true,
    roles: ['001']
}]