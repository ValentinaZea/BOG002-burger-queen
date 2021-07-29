import React, { useState, useEffect } from 'react'
import '../../App.scss';
import NavBar from '../../components/NavBar/NavBar';
import ComponentsTitle from '../../components/componentsTitle/componentsTitle';
import OrderHistory from '../../components/OrderHistory/OrderHistory.jsx';
import OrderDetail from '../../components/OrderDetail/OrderDetail.jsx'
import db from '../../firebase';

function Chef () {
    const [orders, setOrders] = useState([]);
    const [orderPosition, setOrderPosition] = useState(0);
    const [checkedState, setCheckedState] = useState([]);
    const [chefName, setChefName] = useState("")
    const role = "chef";   
    
    window.onload = () =>{
        const newNameChef= prompt("Nombre del Chef");
        setChefName(newNameChef)        
    }
    
    function retrieveOrders (){
        const ref = db.collection('orders').where('state', 'in', ['in preparation', 'to prepare']).orderBy("requestTime", "asc");
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
                <OrderHistory orders={orders} orderPosition={orderPosition} setOrderPosition={setOrderPosition} checkedState={checkedState} setCheckedState={setCheckedState} />
                <OrderDetail orders={orders}  orderPosition={orderPosition} setOrderPosition={setOrderPosition} role={role} chefName={chefName}
                checkedState={checkedState} setCheckedState={setCheckedState} />
            </div>
        </div>
    )
}

export default Chef