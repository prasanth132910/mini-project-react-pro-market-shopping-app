import React from 'react'
import { Link } from "react-router-dom"

export default function Item(props) {
    return (
        <div className="itemCard" id={props.name}>
            <Link to="/item">
                <img src={props.image} alt="" onClick={() => props.getItem(props)} />
            </Link>
            <p>{props.name}</p>
            <p>Rs {props.price}</p>
            <div className="quantity">
                <div onClick={() => decrement(props.name)}>-</div>
                <div className={`quantity-${props.name}`}>1</div>
                <div onClick={() => increment(props.name)}>+</div>
            </div>
            <div className="add-to-cart" onClick={() => props.addToCart(addItem(props))}>
                Add To Cart
            </div>
        </div>
    )
}


function addItem(props) {

    return {
        [props.id]: {
            name: props.name,
            image: props.image,
            price: parseInt(props.price),
            quantity: parseInt(document.querySelector(`.quantity-${props.name}`).innerHTML)
        }
    }

}

function increment(name) {
    let $element = document.querySelector(`.quantity-${name}`)
    let lastValue = parseInt($element.innerHTML)
    $element.innerHTML = lastValue + 1
}

function decrement(name) {
    let $element = document.querySelector(`.quantity-${name}`)
    let lastValue = parseInt($element.innerHTML)
    if (lastValue > 1)
        $element.innerHTML = lastValue - 1

}