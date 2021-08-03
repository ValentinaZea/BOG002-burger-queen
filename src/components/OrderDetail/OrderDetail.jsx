import React, { useEffect, useState } from 'react'
import styles from './OrderDetail.module.scss'
import db from '../../firebase';
import CheckBox from '../checkBox/CheckBox';

function OrderDetail(props) { 
    const [finishedOrder, setFinishedOrder] = useState([])
    function changeFirebase(state){
        let orderId = props.orders[props.orderPosition].id;
        let orderRef = db.collection("orders").doc(orderId);
        return orderRef.update({
            state: state,
            chef: props.chefName
        })
    }

    function sendOrder(){
        if(((props.orders.length) > 0) && (props.orders[props.orderPosition].state === "in preparation") && (finishedOrder[props.orderPosition])){
            changeFirebase("to deliver")
            props.setOrderPosition(0)
        }
    }

    // console.log(props.checkedState[props.orderPosition])
    // if(((props.orders.length) > 0) && (props.orders[props.orderPosition].state === "in preparation") && (props.checkedState[props.orderPosition] !== undefined)){
    //     let checker = props.checkedState[props.orderPosition].every(v => v === true);
    //     let newArrayChecker = [...finishedOrder]
    //     newArrayChecker[props.orderPosition] = checker;
    //     setFinishedOrder(newArrayChecker)
    // }        

    function prepareOrder(){
        if((props.orders.length > 0) && (props.orders[props.orderPosition].state === "to prepare")){
            changeFirebase("in preparation");
        }          
    }
    function orderServed(){
        
    }
    
    return(
        <div className={styles.hamburgerContainer}>            
                {
                    props.role === "chef" ? 
                    (   
                        <div className={styles.headerOrder}>
                            <h3>Cliente: {props.orders.length > 0 ? props.orders[props.orderPosition].client : " "} </h3>
                        </div>
                    ):
                    (
                        <div className={styles.headerOrderWaiter}>
                            <p className={styles.customerName} id="myText">Cliente: {props.orders.length > 0 ? props.orders[props.orderPosition].client : " "}</p>
                            <p className={styles.table}>{props.orders.length > 0 ? props.orders[props.orderPosition].table : " "}</p>
                        </div>
                    )
                }                
            
            <div className={styles.bodyOrder}> 
                <div className={styles.boxTitle}>
                            <h2>Item</h2>
                            <h2>Cantidad</h2>
                </div>  
                <div className={styles.boxProducts}>
                    {
                        props.orders.length > 0 ? 
                        (props.orders[props.orderPosition].order.map((elem, key)=>{
                            let itemDetail = [];
                            elem.checked = elem.checked ? elem.checked : false;
                            const checked2 = elem.checked ? "checked":""
                            if( (elem.hasOwnProperty('type')) && (elem.hasOwnProperty('additions'))){
                                itemDetail = [elem.type, elem.additions]
                            }
                            else if(elem.hasOwnProperty('type')){
                                itemDetail = [elem.type];
                            }
                            return(
                                <div className={styles.containerDetailProduct} key={key}>
                                    <div className={styles.additionsContainer}>
                                        <span>{elem.item}</span><span>{itemDetail}</span>
                                    </div>
                                    <p>{elem.ammount}</p>
                                    <p>{elem.checked ?  "checked" : "no" }</p>
                                    <input type="checkbox" defaultChecked={checked2}></input>
                                    <CheckBox orders={props.orders} orderPosition={props.orderPosition} 
                                    position={key} chefName={props.chefName} elem={elem} 
                                    setOrders={props.setOrders}/>
                                </div>
                            )
                        })) 
                        : " "
                    }
                </div>
            </div>  
            {
                props.role === "chef" ? 
                (
                    <div className={styles.buttonsDown}>
                        <button className={(props.orders.length > 0) && (props.orders[props.orderPosition].state === "to prepare")  ? styles.buttonStartOrder : styles.disabledStart} 
                        onClick={prepareOrder}>
                            Empezar a preparar                            
                        </button>                        
                        <button 
                        className={(props.orders.length) && (props.orders[props.orderPosition].state === "in preparation")
                        && (props.orders[props.orderPosition].chef === props.chefName) &&
                        (finishedOrder[props.orderPosition] )
                        ? styles.buttonSendToDeliver : styles.disabledSend} 
                        onClick={sendOrder}>
                            Pedido Preparado
                        </button>
                    </div>
                ):
                (
                    <button className={styles.footerWaiter} onClick={()=>orderServed}>Pedido en Mesa</button>

                )
            }
            
        </div>
    )
}

export default OrderDetail
