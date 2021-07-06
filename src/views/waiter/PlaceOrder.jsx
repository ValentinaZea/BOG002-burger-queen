import React, {  useState } from 'react'
import '../../App.scss';
import styles from './waiter.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';

function PlaceOrder (){
        const role = "waiter";
        const roleWaiter = "PlaceOrder";
        const [product, setProduct] = useState("");
        return(
            <div className="main-background">
                <NavBar role={role} roleWaiter={roleWaiter}/>
                <div>
                    <div className={styles.bodyContainer}>
                        <Menu product={(item)=> setProduct(item)}></Menu>
                    </div>
                    <div className={styles.bodyContainer}>
                        <Order sendProduct={product}></Order>
                    </div>
                </div> 
            </div>
        )    
}

export default PlaceOrder