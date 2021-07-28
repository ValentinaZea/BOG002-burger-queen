import React from 'react'
import styles from '../OrderHistory/OrderHistory.module.scss';
import Icon from '../../assets/images/cooking.png';
import NoOrdersIcon from '../../assets/images/bocadillo.png'

function OrderHistory({orders, setOrderPosition, orderPosition}) {
    return(          
        <div className={styles.hamburgerContainer}>
                <div className={styles.headerOrder}>
                    <p>ID pedido</p>
                    <p>Hora Petición</p>
                </div>
                <div className={styles.bodyOrder}> 
                    {   
                        orders.length > 0 ? (
                            orders.map((elem, key)=>{
                                    return(
                                        <div key={key} className={key === orderPosition ? styles.itemContainerSelected : styles.itemContainerNoSelected }> 
                                            <p>{elem.id}</p> 
                                            <img src={Icon} alt="cooking" className={elem.state === "in preparation" ? styles.cooking : styles.none} />
                                            <p>{elem.requestTime.toDate().toLocaleTimeString()}</p>
                                            <button className={styles.detailProduct} onClick={()=>setOrderPosition(key)}>Ver Pedido</button>
                                        </div> 
                                    )
                                })
                        ) : (  
                        <div className={styles.emptyContainer}>
                            <h2>No hay órdenes por procesar</h2> 
                            <img src={NoOrdersIcon} alt="cooking" className={styles.noOrdersIcon}></img>
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
