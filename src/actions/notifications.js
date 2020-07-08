import actionType from './actionType'
import { getNotifications } from '../request'
export const startPost = () => {
    return {
        type: actionType.START_NOTIFICATION_POST
    }
}


export const finishPost = () => {
    return {
        type: actionType.FINISH_NOTIFICATION_POST
    }
}

export const markNotificationAsReadById = (id) => {
    return dispatch => {
        dispatch(startPost())
        setTimeout(() => {
            dispatch({
                type: actionType.MARK_NOTIFICATION_AS_READ_BY_ID,
                payload: {
                    id
                }
            })
            dispatch(finishPost())
        }, 500)
    }
}

export const markAllNotificationsAsRead = () => {
    return dispatch => {
        dispatch(startPost())
        setTimeout(() => {
            dispatch({
                type: actionType.MARK_ALL_NOTIFICATIONS_AS_READ
            })
            dispatch(finishPost())
        }, 2000)
    }
}

export const getTheNotifications = () => {
    return dispatch => {
        dispatch(startPost())
        getNotifications().then((resp => {
            dispatch({
                type: actionType.RECIVED_NOTIFICATIONS,
                payload: resp
            })
        })).catch(err => {
            console.log(err)
        }).finally(() => {
            dispatch(finishPost())
        })
    }
}