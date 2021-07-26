import React from 'react'
import styles from './OrderDetail.module.scss'

function OrderDetail(props) {
    return(
        <div className={styles.hamburgerContainer}>
            <div className={styles.headerOrder}>
                <h3>Cliente: {props.orders.length > 0 ? props.orders[props.orderPosition].client : " "} </h3>
            </div>
            <div className={styles.bodyOrder}> 
                <div className={styles.boxTitle}>
                            <h2>Item</h2>
                            <h2>Cantidad</h2>
                </div>  
                <div className={styles.boxProducts}>
                    {
                        props.orders.length > 0 ? 
                        (props.orders[props.orderPosition].order.map((elem, key)=>{
                            let itemDetail = [];
                            if( (elem.hasOwnProperty('type')) && (elem.hasOwnProperty('additions') )){
                                itemDetail = [elem.type, elem.additions]
                            }
                            else if(elem.hasOwnProperty('type')){
                                itemDetail = [elem.type];
                            }
                            return(
                                <div className={styles.containerDetailProduct} key={key}>
                                    <div className={styles.additionsContainer} key={key}>
                                        <span>{elem.item}</span><span>{itemDetail}</span>
                                    </div>
                                    {/* <p>{itemDetail}</p> */}
                                    <p>{elem.ammount}</p>
                                    <input type="checkbox"></input>
                                </div>
                            )
                        })) 
                        : " "
                    }
                </div>
                
            </div>  
            <div className={styles.footerOrder}>      
            </div> 
        </div>
    )
}

export default OrderDetail