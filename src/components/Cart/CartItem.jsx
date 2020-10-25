import React from 'react'

export default function CartItem(props) {
    return (
        <tr>
            <td className="food-image"><img src={props.image} alt={props.name} /></td>
            <td>{props.name}</td>
            <td>Rs {props.price * props.quantity}</td>
            <td className="quant-col"><span className="quant">-</span> <span>{props.quantity}</span> <span className="quant">+</span></td>
        </tr>
    )
}
