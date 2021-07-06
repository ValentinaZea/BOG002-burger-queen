import React from 'react'

function Order(props) {
    //console.log(props.sendProduct)

        return (
            <div>
                <h1>ORDEN</h1>
                <hr />
                <div>
                    <p> Item: {props.sendProduct[0]}</p>
                    <p> precio: {props.sendProduct[1]}</p>
                </div>
            </div>
        )
}
export default Order