import React, { Component, useState }  from 'react'
// import HomeRouting from '../../components/HomeRouting/HomeRouting.jsx'
import styles from './home.module.scss'
import logo from '../../assets/images/BQ-logo.png'
import Chef from '../../views/chef/Chef.jsx';
import Orders from '../../views/orders/Orders.jsx';
import Waiter from '../../views/waiter/Waiter.jsx';
// import styles from '../HomeRouting/homeRouting.module.scss';
import waiterIcon from '../../assets/images/waiter.png';
import chefIcon from '../../assets/images/chef.png';
import ordersIcon from '../../assets/images/menu.png';
import NavBar from '../../components/NavBar/NavBar.jsx'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Home() {
        // const [role, setRole] = useState("");
    return(
        <Router>
        <div className = {styles.background}>
            <div className = {styles.column}>
                <img src={logo} alt = "Logo" className = {styles.logo}></img>
                <h1 className={styles.title}>Bienvenido a Burger Queen</h1>
            </div>
            <div className = {styles.column}>
                
                    <div className ={styles.groupButtons}>
                            <Link to="/waiter" className={styles.textLink}>
                                <button type="button" id={styles.buttonWaiter}>
                                {/*  onClick={() => setRole("waiter")}*/}
                                    <img src={waiterIcon} alt = "WaiterIcon" className = {styles.icon}></img>
                                    <span>Soy Mesero</span>
                                </button>
                            </Link>
                            <Link to="/chef" className = {styles.textLink}>
                                <button type="button" id={styles.buttonChef} >
                                {/* onClick={() => setRole("chef")} */}
                                    <img src={chefIcon} alt="ChefIcon" className = {styles.icon}></img>
                                    <span>Soy Chef</span>
                                </button>
                            </Link>
                            <Link to="/orders" className = {styles.textLink}>
                                <button type="button" id={styles.buttonOrders}>
                                {/* onClick={() => setRole("orders")}*/}
                                    <img src={ordersIcon} alt ="OrdersIcon" className = {styles.icon}></img>
                                    <span className={styles.orderSpan}>Historial de Pedidos</span>
                                </button>
                            </Link>   
                    </div>
            </div>
        </div>
            <Switch>
                <Route exact path="/waiter">
                    <Waiter />
                    <NavBar role={'waiter'}/>
                </Route>
                <Route exact path="/chef">
                    <Chef />
                </Route>
                <Route exact path="/orders">
                    <Orders />
                </Route>
            </Switch>
        </Router>
    )
}

export default Home