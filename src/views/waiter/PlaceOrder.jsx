import React, {  useState } from 'react'
import '../../App.scss';
import NavBar from '../../components/NavBar/NavBar';
import Menu from '../../components/Menu/Menu';
import Order from '../../components/Order/Order';
import menu from '../../menu.json';
import ComponentsTitle from '../../components/componentsTitle/componentsTitle.jsx';

function PlaceOrder (){
        const role = "waiter";
        const roleWaiter = "PlaceOrder";
        const [orderedProducts, setOrderedProducts] = useState([]);
        return(
            <div className="main-background">
                <NavBar role={role} roleWaiter={roleWaiter}/>
                <ComponentsTitle leftTitle={'MENÚ'} rightTitle={'ORDEN'}></ComponentsTitle>
                <div className="bodyContainer">
                    <Menu orderedProducts={orderedProducts} menu={menu} setOrderedProducts={setOrderedProducts}></Menu>
                    <Order orderedProducts={orderedProducts} menu={menu} setOrderedProducts={setOrderedProducts}></Order>
                </div> 
            </div>
        )    
}

export default PlaceOrder