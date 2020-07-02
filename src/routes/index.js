import { Artical, Home, User, ArticalDetail, NotFound, Login, Dashboard, ArticleList, ArticleEdit, Settings } from '../views'

export const mainRouter = [
    { pathname: '/login', component: Login }
    , { pathname: '/404', component: NotFound },
    { pathname: '/dashboard', component: Dashboard },
    { pathname: '/articleList', component: ArticleList },
    { pathname: '/articleEdit', component: ArticleEdit },
    { pathname: '/settings', component: Settings }
]