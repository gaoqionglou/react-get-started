import React, { Component } from 'react'
import { connect } from 'react-redux'
// eslint-disable-next-line
import { increment, decrement, decrementAsync } from '../../actions/cart'
//作用相当于把state赋值给组件的props
// eslint-disable-next-line
const mapStateFromProps = (state) => { //state相当于store.getState

    return {
        cartList: state.cart
    }
}


class CartRRList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cartList: []
        }
    }

    render() {
        console.log(this.props)
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
                        this.props.cartList.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <th>{item.title}</th>
                                    <th>{item.price}</th>
                                    <th>
                                        <button onClick={() => {
                                            // this.props.dispatch(decrement(item.id))
                                            // this.props.reduce(item.id)
                                            this.props.decrementAsync(item.id)
                                        }}>(异步)-</button>
                                        <button onClick={() => {
                                            // this.props.dispatch(decrement(item.id))
                                            // this.props.reduce(item.id)
                                            this.props.decrement(item.id)
                                        }}>-</button>
                                        <span>{item.amount}</span>
                                        <button onClick={() => {
                                            // this.props.dispatch(increment(item.id))
                                            // this.props.add(item.id)
                                            this.props.increment(item.id)
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


// const mapDispatchToProps = dispatch => {
//     return {
//         add: (id) => dispatch(increment(id)),
//         reduce: (id) => dispatch(decrement(id)),
//     }
// }
// 传入第二个参数，把dispatch覆盖掉 props中将出现add和reduce的引用，可以直接this.props.add(id)
// export default connect(mapStateFromProps, mapDispatchToProps)(CartRRList)

//或者直接传入actioncreator的对象，不覆盖dispatch redux内部会dispatch actionCreator的方法
// export default connect(mapStateFromProps, { increment, decrement })(CartRRList)


// export default connect(mapStateFromProps)(CartRRList)



//或者使用装饰者模式，

export default connect(mapStateFromProps, { increment, decrement, decrementAsync })(CartRRList)