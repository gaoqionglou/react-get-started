import axios from 'axios'
import { message } from 'antd'
const isDev = process.env.NODE_ENV === 'development'
const service = axios.create({
    baseURL: isDev ? "http://rap2.taobao.org:38080/app/mock/259980" : ''
})

//登陆不用全局拦截器
const service1 = axios.create({
    baseURL: isDev ? "http://rap2.taobao.org:38080/app/mock/259980" : ''
})

service.interceptors.request.use((config) => {
    config.data = {
        ...config.data,
        // authToken:window.localStorage.getItem('authToken')
        authToken: 'mocktoken'
    }
    return config
})

service.interceptors.response.use((resp) => {

    if (resp.status === 200) {
        return resp.data.data
    } else {
        //全局处理错误
        message.error('请求出错')
    }
})

export const getArticles = (offset = 0, limited = 10) => {
    return service.post('/api/v1/articleList', { offset, limited })
}

export const delArticle = (id) => {
    return service.post(`/api/v1/articleDelete/${id}`)
}

export const getArticleById = (id) => {
    return service.post(`/api/v1/article/${id}`)
}

export const saveArticle = (id, data) => {
    return service.post(`/api/v1/article/edit/${id}`, data)
}

export const getArticleAmout = () => {
    return service.post(`/api/v1/articleAmount`)
}

export const getNotifications = () => {
    return service.post(`/admin/notifications`)
}

export const login = (userInfo) => {
    return service1.post(`/api/v1/login`,userInfo)
}

