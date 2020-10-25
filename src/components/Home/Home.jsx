import React from 'react'
import Item from './Item'
import "./Home.css"

export default function Home(props) {
    return (
        <div className="home">
            {props.products.map(item => <Item key={item.id} {...item} getItem={props.getItem} addToCart={props.addToCart} />)}
        </div>
    )
}
