import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

export default function Navbar(props) {
    return (
        <div className="navbar">
            <Link to="/"><p>ProMarket</p></Link>
            <i className="fa fa-shopping-cart" aria-hidden="true" onClick={props.showCart}>{props.totalItems !== 0 && <sup>{props.totalItems}</sup>}</i>
        </div>
    )
}
