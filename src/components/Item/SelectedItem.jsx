import React from 'react'
import "./SelectedItem.css"

export default function SelectedItem(props) {
    return (
        <div className="selected-item">
            <img src={props.item.image} alt={props.item.name} />
            <div>
                <h1>{props.item.name}</h1>
                <div><p>{props.item.description}</p></div>
            </div>
        </div>
    )
}
