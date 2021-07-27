import React from 'react'
import styles from '../OrderHistory/OrderHistory.module.scss';
import Icon from '../../assets/images/cooking.png';

function OrderHistory({orders, setOrderPosition}) {
    return(          
        <div className={styles.hamburgerContainer}>
                <div className={styles.headerOrder}>
                    <h3>ID pedido</h3>
                    <h3>Hora Petición</h3>
                </div>
                <div className={styles.bodyOrder}> 
                    {   
                        orders ? (
                            orders.map((elem, key)=>{
                                    return(
                                        <div key={key} className={styles.itemContainer}> 
                                            <p>{elem.id}</p> 
                                            <img src={Icon} alt="cooking" className={elem.state === "in preparation" ? styles.cooking : styles.none} />
                                            <p>{elem.requestTime.toDate().toLocaleTimeString()}</p>
                                            <button className={styles.detailProduct} onClick={()=>setOrderPosition(key)}>Ver Pedido</button>
                                        </div> 
                                    )
                                })
                        ) : (  
                        <div className={styles.itemContainer}>
                            <p>Nulo en operador ternario</p> 
                        </div> 
                        )
                        
                    }   
                </div>  
                <div className={styles.footerOrder}>      
                </div> 
        </div>
    )
}

export default React.memo(OrderHistory)
