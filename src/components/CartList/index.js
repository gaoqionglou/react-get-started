import React, { Component } from 'react'

class CartList extends Component {
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
                    <tr>
                        <th>1</th>
                        <th>Apple</th>
                        <th>888</th>
                        <th>
                            <button>-</button>
                            <span>10</span>
                            <button>+</button>


                        </th>
                        <th>Null</th>
                    </tr>
                </tbody>
            </table>
        )
    }
}
export default CartList