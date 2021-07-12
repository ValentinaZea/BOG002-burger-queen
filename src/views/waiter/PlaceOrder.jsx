import React, {  useState } from 'react'
import '../../App.scss';
import styles from './waiter.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';

function PlaceOrder (){
        const role = "waiter";
        const roleWaiter = "PlaceOrder";
        const [orderedProducts, setOrderedProducts] = useState([]);
        return(
            <div className="main-background">
                <NavBar role={role} roleWaiter={roleWaiter}/>
                <div className={styles.titles}>
                    <div className={styles.menuTitle}>
                        <h1>MENÚ</h1>
                        <hr />
                    </div>
                    <div className={styles.orderTitle}>
                        <h1>ORDEN</h1>
                        <hr />
                    </div> 
                </div>
                <div>
                    <div className={styles.bodyContainer}>
                        <Menu orderedProducts={orderedProducts} setOrderedProducts={setOrderedProducts}></Menu>
                    </div>
                    <div className={styles.bodyContainer}>
                        {/* <Order sendProduct={product}></Order> */}
                        <Order orderedProducts={orderedProducts} setOrderedProducts={setOrderedProducts}></Order>
                    </div>
                </div> 
            </div>
        )    
}

export default PlaceOrder