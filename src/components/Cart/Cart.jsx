import React from 'react'
import "./Cart.css"
import CartItem from './CartItem'

export default class Cart extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            total: 0
        }
    }


    calculateTotal = (price) => {
        this.setState(prevState => {
            return { total: (prevState.total + price) }
        })
    }

    componentDidMount() {
        this.setState(() => {
            let totalPrice = 0
            let ids = Object.keys(this.props.cartItems)

            ids.forEach(item => {
                totalPrice += (this.props.cartItems[item].quantity * this.props.cartItems[item].price)
            })

            return {
                total: totalPrice
            }
        })
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.setState(() => {
                let totalPrice = 0
                let ids = Object.keys(this.props.cartItems)

                ids.forEach(item => {
                    totalPrice += (this.props.cartItems[item].quantity * this.props.cartItems[item].price)
                })

                return {
                    total: totalPrice
                }
            })
        }
    }


    render() {

        let ids = Object.keys(this.props.cartItems)
        return (
            <div className="cart" >
                <table>
                    <thead>
                        <tr>
                            <td colSpan="4">Cart</td>
                        </tr>
                    </thead>
                    <tbody>
                        {ids.map(id => <CartItem key={id} {...this.props.cartItems[id]} id={id} calculateTotal={this.calculateTotal} updateCartQuantity={this.props.updateCartQuantity} />)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="4">Total: Rs {this.state.total}</td>
                        </tr>
                        <tr>
                            <td id="buy" colSpan="4"><div>Buy Now</div></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}
