import React from 'react'
import styles from '../checkBox/checkBox.module.scss'

export default function CheckBox(props) {
    
    const HandleOnChange = () => {
        const newArrayOrders = [...props.orders];
        const itemChecked = props.orders[props.orderPosition].order[props.position].checked;
        // console.log(newArrayOrders[props.orderPosition].order[props.position].checked)
        newArrayOrders[props.orderPosition].order[props.position].checked = !itemChecked;
        props.setOrders(newArrayOrders)
        console.log(newArrayOrders[props.orderPosition].order)
    }
    return (
        <div>
            <input className={(props.orders.length > 0) && (props.orders[props.orderPosition].state === "in preparation") && (props.orders[props.orderPosition].chef === props.chefName) ? styles.checkbox : styles.none}
            type="checkbox" onChange={() => HandleOnChange()}></input>
        </div>
    )
}
