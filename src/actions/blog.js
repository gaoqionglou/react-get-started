import actionType from './actionType'
import { getPosts } from '../services'
export const startFetchBlogList = () => {
    return {
        type: actionType.START_FETCH_BLOG_LIST
    }
}

export const fetchBlogListSuccess = (payload) => {
    return {
        type: actionType.FETCH_BLOG_LIST_SUCCESS,
        payload
    }
}

export const fetchBlogListFail = () => {
    return {
        type: actionType.FETCH_BLOG_LIST_FAIL
    }
}

export const fetchBlogList = () => dispatch => {
    dispatch(startFetchBlogList())
    getPosts().then(resp => {
        if (resp.status !== 200) {
            dispatch(fetchBlogListSuccess({ list: resp.data }))
        } else {
            dispatch(fetchBlogListFail())
        }
    }).catch(error => {
        console.log(error)
        dispatch(fetchBlogListFail())
    })
}