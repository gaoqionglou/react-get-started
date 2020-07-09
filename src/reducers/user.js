import actionType from '../actions/actionType'
const initState = {
    id: '',
    displayName: '',
    avatar: '',
    role: '',
    authToken: '',
    isLogin: false
}
export default (state = initState, action) => {
    switch (action.type) {
        case actionType.START_LOGIN:
            return state
        case actionType.LOGIN_SUCCESS:
            return state
        case actionType.LOGIN_FAILED:
            return state
        default:

            return state
    }
}
