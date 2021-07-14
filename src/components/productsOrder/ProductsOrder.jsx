import React, { useState } from 'react'
import styles from '../productsOrder/productsOrder.module.scss'

function ProductsOrder(props){
    let total =0;
    return(
        <div className={styles.containerBox}>
            <div className={styles.titleContainer}>
                <h1>Item</h1>
                <h1>Cantidad</h1>
                <h1>Precio</h1>
            </div>
            <div className={styles.containerProductsOrder}>
                {
                    props.order.map((elem)=>{
                        console.log(elem)
                        const { ammount, totalPrice, ...rest } = elem;
                        console.log(rest)
                        total = elem.totalPrice + total;
                        return(
                            Object.values(elem).map((elem2, key)=>{
                                // console.log(elem2, key)
                                let renderP;
                                if(key < 3){
                                    renderP = <p key={key}>{elem2}</p>
                                }
                                // if(elem.hasOwnProperty('type')){
                                //     const additions = elem.slice(elem2[3])
                                // }
                                return renderP
                                
                            })
                        ) 
                    })
                }
            </div>
            <p>${total}</p>
        </div>
        
    )
}

export default ProductsOrder