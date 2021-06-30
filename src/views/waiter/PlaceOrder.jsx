import React, { Component } from 'react'
import '../../App.scss';
import styles from './waiter.module.scss';
import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';

class PlaceOrder extends Component{
    render(){
        const role = "waiter";
        const roleWaiter = "PlaceOrder";
        // const role = this.props.role
        return(
            <div className="main-background">
                <NavBar role={role} roleWaiter={roleWaiter}/>
                <div>
                    <div className={styles.bodyContainer}>
                        <Menu></Menu>
                    </div>
                    <div className={styles.bodyContainer}>
                        <Order></Order>
                    </div>
                </div> 
            </div>
        )
    }
    
}

export default PlaceOrder