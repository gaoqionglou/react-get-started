import actionType from './actionType'

export const increment = (id) => {
    return {
        type: actionType.CART_ITEM_INCREMENT,
        payload:{
            id
        }
    }
}


export const decrement = (id)=>{
    return {
        type: actionType.CART_ITEM_DECREMENT,
        payload:{
            id
        }
    }
}