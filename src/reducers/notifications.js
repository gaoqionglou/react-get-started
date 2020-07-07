import actionType from '../actions/actionType'
const initState = {
    isLoading: false,
    list: [{
        id: 1,
        title: 'abssd',
        desc: "pppp",
        hasRead: false
    }, {
        id: 2,
        title: 'XXXX',
        desc: "YYYYY",
        hasRead: true
    }]
}

export default (state = initState, action) => {
    switch (action.type) {
        case actionType.MARK_NOTIFICATION_AS_READ_BY_ID:
            console.log(state, action)
            const newlist = state.list.map(item => {
                if (item.id === action.payload.id) {
                    item.hasRead = true
                }
                return item
            })
            const newstate = {
                ...state,
                list: newlist
            }
            console.log(newstate)
            return newstate
        case actionType.MARK_ALL_NOTIFICATIONS_AS_READ:


            return {
                ...state,
                list: state.list.map(item => {

                    item.hasRead = true

                    return item
                })
            }
        default:
            return state
    }
}