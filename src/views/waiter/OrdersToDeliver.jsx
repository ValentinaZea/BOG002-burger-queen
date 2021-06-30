import React, { Component } from 'react'
import '../../App.scss';
import NavBar from '../../components/NavBar/NavBar';

class OrdersToDeliver extends Component{
    render(){
        const role = "waiter";
        const roleWaiter = "OrdersToDeliver";
        // const role = this.props.role
        return(
            <div className="main-background">
                <NavBar role={role} roleWaiter={roleWaiter}/>
            </div>
        )
    }
    
}

export default OrdersToDeliver
