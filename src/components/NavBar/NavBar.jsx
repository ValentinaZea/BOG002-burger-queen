import React from "react";
import styles from '../NavBar/navBar.module.scss';
import Logo from '../../assets/images/main-logo.png';
import ChefIcon from '../../assets/images/chef.png';
import WaiterIcon from '../../assets/images/waiter.png';
import OrderIcon from '../../assets/images/menu.png';
import Home from "../../views/home/Home.jsx";
import Waiter from "../../views/waiter/Waiter.jsx";
import Chef from "../../views/chef/Chef.jsx";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function NavBar (props) {
    let icon, btnChangeRole, styleClass, linkTo;
        switch (props.role) {
            case "chef":
                icon = ChefIcon;
                btnChangeRole =  `Cambiar a Mesero`;
                styleClass = styles.role;
                linkTo = '/waiter'
                break;
            case "waiter":
                icon = WaiterIcon;
                btnChangeRole = `Cambiar a Chef`
                styleClass = styles.waiter;
                linkTo = '/chef'
                break;
            case "orders":
                icon = OrderIcon;
                styleClass = styles.orders;
                break;
            default:
                break;
        }
    return (
        <Router>
        <div>
            <nav>
                <Link to="/" className={styles.textLink}>
                    <img src={Logo} alt = "WaiterIcon" className = {styles.icon}></img>    
                </Link>
                <Link to={linkTo} className={styles.textLink}>
                    
                </Link> 
                    {/* <div className={styles.navContainer}>
                    </div>*/}
                <div>
                    <button className={styleClass} >{btnChangeRole}</button>
                    <img src={icon} alt = "RoleIcon" className = {styles.roleIcon}></img>
                </div>
            </nav>
        </div>
        <Switch>
        <Route exact path="/waiter">
            <Waiter />
        </Route>
        <Route exact path="/chef">
            <Chef />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        </Switch> 
</Router>
    )
}

export default NavBar;