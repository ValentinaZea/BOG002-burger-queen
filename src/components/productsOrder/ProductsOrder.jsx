import React from 'react'
import styles from '../productsOrder/productsOrder.module.scss'

function ProductsOrder(props){
    let total = 0;
    return(
        <div className={styles.containerBox}>
            <div className={styles.titleContainer}>
                <h2>Item</h2>
                <h2>Cantidad</h2>
                <h2>Precio</h2>
            </div>
            <div className={styles.containerProductsOrder}>
                {
                    props.order.map((elem)=>{
                        let itemDetail = "";
                        total = elem.totalPrice + total;
                            let product = Object.values(elem);
                            if( (elem.hasOwnProperty('type')) && (elem.hasOwnProperty('additions') )){
                                itemDetail = product.slice(-2).flat().join('');
                            }
                            else if(elem.hasOwnProperty('type')){
                                itemDetail = product.slice(-1)[0];
                            }
                            return(
                            product.map((elem2, key)=>{
                                let renderP;
                                switch(key){
                                    case 0:
                                        renderP = <div className={styles.additionsContainer} key={key}>
                                                    <span>{elem2}</span><span>{itemDetail}</span>
                                                </div>
                                    break;
                                    case 1:
                                        renderP = <p key={key}>{elem2}</p>
                                    break;
                                    case 2:
                                        renderP = <p key={key}>$ {elem2}</p>
                                    break;
                                    default:
                                    break;                                    
                                }
                                return renderP
                            })
                        ) 
                    })
                }
            </div>
            <div className={styles.total}><p>Total</p><p>$ {total}</p></div>            
        </div>        
    )
}

export default ProductsOrder