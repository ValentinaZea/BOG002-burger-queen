import React, { useState, useEffect } from 'react'
import '../../App.scss';
import NavBar from '../../components/NavBar/NavBar';
import ComponentsTitle from '../../components/componentsTitle/componentsTitle';
import OrderHistory from '../../components/OrderHistory/OrderHistory.jsx';
import OrderDetail from '../../components/OrderDetail/OrderDetail.jsx'
import db from '../../firebase';

function OrdersToDeliver (){
    const [orders, setOrders] = useState([]);
    const [orderPosition, setOrderPosition] = useState(0);
    const role = "waiter";
    const roleWaiter = "OrdersToDeliver";
    function retrieveOrders (){
        const ref = db.collection('orders').where('state', '==', 'to deliver').orderBy("requestTime", "asc");
        return ref.onSnapshot((querySnapshot) => { 
            const ordersN = [];  
            querySnapshot.forEach((doc) => {
                const newData = doc.data();
                newData.id = doc.id;
                ordersN.push(newData);
            }); 
            setOrders(ordersN)
        })
    }
    useEffect(retrieveOrders, []);

    return(
        <div className="main-background">
            <NavBar role={role}></NavBar>
            <ComponentsTitle leftTitle={'HISTORIAL DE PEDIDOS'} rightTitle={'DETALLE DE LA ORDEN'}></ComponentsTitle>
            <div className="bodyContainer">
                <OrderHistory orders={orders} orderPosition={orderPosition} setOrderPosition={setOrderPosition} />
                <OrderDetail orders={orders}  orderPosition={orderPosition} setOrderPosition={setOrderPosition} role={role}/>
            </div>
        </div>
    )
}

export default OrdersToDeliver
