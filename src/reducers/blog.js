import actionType from '../actions/actionType'
const initState = {
    list: [],
    isLoading: false,
    errorMsg: 'something error...'
}
export default (state = initState, action) => {

    switch (action.type) {

        case actionType.START_FETCH_BLOG_LIST:
            state.isLoading = true
            return { ...state }
        case actionType.FETCH_BLOG_LIST_SUCCESS:
            state.isLoading = false
            state.list = action.payload.list
            return { ...state }
        case actionType.FETCH_BLOG_LIST_FAIL:
            state.isLoading = false
            console.log(state)
            return { ...state }

        default:
            return state
    }
}