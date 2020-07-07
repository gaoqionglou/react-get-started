import actionType from './actionType'

export const markNotificationAsReadById = (id) => {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: actionType.MARK_NOTIFICATION_AS_READ_BY_ID,
                payload: {
                    id
                }
            })
        })
    }
}

export const markAllNotificationsAsRead = () => {
    return dispatch => {
        // dispatch(startPost())
        setTimeout(() => {
            dispatch({
                type: actionType.MARK_ALL_NOTIFICATIONS_AS_READ
            })
            // dispatch(finishPost())
        }, 2000)
    }
}