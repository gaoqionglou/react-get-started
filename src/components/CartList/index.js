import React, { Component } from 'react'
import { increment, decrement } from '../../actions/cart'
class CartList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cartList: []
        }
    }
    getState = () => {

        this.setState(
            {
                cartList: this.props.store.getState().cart
            }
        )

    }
    componentDidMount() {
        this.getState()
        this.props.store.subscribe(this.getState)
    }
    render() {

        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.cartList.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <th>{item.title}</th>
                                    <th>{item.price}</th>
                                    <th>
                                        <button onClick={() => {
                                            this.props.store.dispatch(decrement(item.id))
                                        }}>-</button>
                                        <span>{item.amount}</span>
                                        <button onClick={() => {
                                            this.props.store.dispatch(increment(item.id))
                                        }}>+</button>


                                    </th>
                                    <th>Null</th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
export default CartList