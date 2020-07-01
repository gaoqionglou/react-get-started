import actionType from '../actions/actionType'
const initState = {
    list: [],
    isLoading: false
}
export default (state = initState, action) => {

    switch (action.type) {

        case actionType.START_FETCH_BLOG_LIST:
            state.isLoading = true
            console.log('START_FETCH_BLOG_LIST', state, action)
            return state
        case actionType.FETCH_BLOG_LIST_SUCCESS:
            state.isLoading = false
            state.list = action.payload.list
            console.log('FETCH_BLOG_LIST_SUCCESS', state, action.payload)
            return {
                ...state,
                isLoading: false,
                list: action.payload.list
            }
        case actionType.FETCH_BLOG_LIST_FAIL:
            state.isLoading = false

            console.log('FETCH_BLOG_LIST_FAIL', state, action)
            return state

        default:
            return state
    }
}