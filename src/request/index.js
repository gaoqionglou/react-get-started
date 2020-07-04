import axios from 'axios'
import { message } from 'antd'
const isDev = process.env.NODE_ENV === 'development'
const service = axios.create({
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