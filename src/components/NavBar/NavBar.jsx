import React from "react";
import styles from '../NavBar/navBar.module.scss';
import Logo from '../../assets/images/main-logo.png';
import ChefIcon from '../../assets/images/chef.png';
import WaiterIcon from '../../assets/images/waiter.png';
import OrderIcon from '../../assets/images/menu.png';
import { Link } from "react-router-dom";

function NavBar (props) {
    let icon, btnChangeRole, styleClass, changeRole, navTo, btnNav1, btnNav2, classNav2, idBtnNav1, idBtnNav2;
        switch (props.role) {
            case "chef":
                icon = ChefIcon;
                btnChangeRole =  `Cambiar a Mesero`;
                btnNav1 = 'Pedidos Solicitados';
                classNav2 = styles.btnNavNone2;
                styleClass = styles.role;
                changeRole = '/waiter/PlaceOrder'
                navTo = '/chef'
                break;
            case "waiter":
                icon = WaiterIcon;
                btnChangeRole = `Cambiar a Chef`
                styleClass = styles.role;
                changeRole = '/chef';
                btnNav1 = 'Hacer Pedido';
                btnNav2 = 'Pedidos Listos';
                navTo = '/waiter/PlaceOrder';
                classNav2 = styles.btnNav2;
                if(props.roleWaiter === "PlaceOrder") {
                    idBtnNav1 = styles.selected;
                    idBtnNav2 = styles.noSelected;
                }
                else{
                    idBtnNav1 = styles.noSelected;
                    idBtnNav2 = styles.selected;
                }
                break;
            case "orders":
                icon = OrderIcon;
                styleClass = styles.orders;
                changeRole = '/orders';
                navTo = '/orders'
                btnNav1 = 'Historial Pedidos';
                classNav2 = styles.btnNavNone2;
                break;
            default:
                break;
        }
    return (
        <div>
            <nav className={styles.navBar}>
                <Link to="/" className={styles.textLink}>
                    <img src={Logo} alt="HomeIcon" className={styles.icon}></img>    
                </Link> 
                <div className={styles.navContainer}>
                    <Link className={styles.textLink} to={navTo}>
                        <button className={styles.btnNav1} id={idBtnNav1}>{btnNav1}</button>
                    </Link>
                    <Link className={styles.textLink} to="/waiter/OrdersToDeliver">
                        <button className={classNav2} id={idBtnNav2}>{btnNav2}</button>
                    </Link>
                </div>
                <div id={styles.changeRole}> 
                    <Link className={styles.textLink} to={changeRole}>
                        <button className={styleClass}>{btnChangeRole}</button>
                    </Link>
                    <img src={icon} alt="RoleIcon" className={styles.roleIcon}></img>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;