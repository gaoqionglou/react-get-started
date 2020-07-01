import actionType from './actionType'

export const increment = (id) => {
    return {
        type: actionType.CART_ITEM_INCREMENT,
        payload: {
            id
        }
    }
}


export const decrement = (id) => {
    return {
        type: actionType.CART_ITEM_DECREMENT,
        payload: {
            id
        }
    }
}

// export const decrementAsync = (id) => {
//     return (dispatch) => {
//         setTimeout(() => {
//             dispatch(decrement(id))
//         }, 2000)
//     }
// }

export const decrementAsync = id => dispatch => {
    setTimeout(() => {
        dispatch(decrement(id))
    }, 2000)
}