import actionType from '../actions/actionType'
const initState = [{
    id: 1,
    title: "Apple",
    price: 88.88,
    amount: 888
}, {
    id: 2,
    title: "ORgane",
    price: 99.99,
    amount: 999
}]

export default (state = initState, action) => {

    switch (action.type) {
        case actionType.CART_ITEM_INCREMENT:

            let items = state.map(item => {
                if (item.id === action.payload.id) {
                    item.amount += 1
                }
                return item
            })
            console.log(items)
            return items

        case actionType.CART_ITEM_DECREMENT:

            return state.map(item => {
                if (item.id === action.payload.id) {
                    item.amount -= 1
                }
                return item
            })


        default:
            return state
    }
}