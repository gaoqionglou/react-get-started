import Artical from './Artical'
import Home from './Home'
import User from './User'
import ArticalDetail from './Artical/ArticalDetail'
import NotFound from './NotFound'

import Login from './Login'
import Dashboard from './Dashboard'
import ArticleList from './Article'
import ArticleEdit from './Article/Edit'
import Settings from './Settings'
//因为有个loadable高阶组件在外面导致routeProps传不进去，不要loadable
// import { Loading } from '../components'

// import Loadable from 'react-loadable'
// import Loadable from './Loadable'
// const Dashboard = Loadable({
//     loader: () => import('./Dashboard'),
//     loading: Loading
// })
// const ArticleList = Loadable({
//     loader: () => import('./Article'),
//     loading: Loading
// })
// const ArticleEdit = Loadable({
//     loader: () => import('./Article/Edit'),
//     loading: Loading
// })
// const Settings = Loadable({
//     loader: () => import('./Settings'),
//     loading: Loading
// })
// const Login = Loadable({
//     loader: () => import('./Login'),
//     loading: Loading
// })
// export { Loading }
export { Artical, Home, User, ArticalDetail, NotFound, Login, Dashboard, ArticleList, ArticleEdit, Settings }