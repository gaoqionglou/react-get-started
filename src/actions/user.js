import actionType from './actionType'
import { login } from '../request'

export const startLogin = () => {
    return {
        type: actionType.START_LOGIN
    }
}

export const changeAvatar = (avatarUrl) => {
    return {
        type: actionType.CHANGE_AVATAR,
        payload: {
            avatarUrl
        }
    }
}

export const loginSuccess = (userInfo) => {
    return {
        type: actionType.LOGIN_SUCCESS,
        payload: {
            userInfo
        }
    }
}

export const loginFailed = () => {
    window.localStorage.removeItem('authToken')
    window.sessionStorage.removeItem('authToken')
    window.localStorage.removeItem('userInfo')
    window.sessionStorage.removeItem('userInfo')
    return {
        type: actionType.LOGIN_FAILED
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(loginFailed())
    }
}
export const doLogin = (userInfo) => {
    return dispatch => {
        dispatch(startLogin())
        login(userInfo)
            .then(resp => {
                if (resp.status === 200) {
                    if (userInfo.remember === true) {
                        window.localStorage.setItem('authToken', resp.data.data.authToken)
                        window.localStorage.setItem('userInfo', JSON.stringify(resp.data.data))
                    } else {
                        window.sessionStorage.setItem('authToken', resp.data.data.authToken)
                        window.sessionStorage.setItem('userInfo', JSON.stringify(resp.data.data))
                    }
                    dispatch(loginSuccess({
                        ...resp.data.data
                    }))
                } else {
                    dispatch(loginFailed())
                }
            })
    }
}