import React, { useEffect, useState } from 'react'
import styles from './OrderDetail.module.scss'
import db from '../../firebase';

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

    const HandleOnChange = (position) => {
        // console.log("position",position)
        const newArrayChecked = [...props.checkedState];
        const updatedCheckedState = props.checkedState[props.orderPosition].map((item, index) =>
            index === position ? !item : item
        );
        newArrayChecked[props.orderPosition] = updatedCheckedState;
        props.setCheckedState(newArrayChecked);
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
            let newArrayChecked = [...props.checkedState]
            newArrayChecked[props.orderPosition] = new Array(props.orders[props.orderPosition].order.length).fill(false);
            props.setCheckedState(newArrayChecked)
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
                                    <input
                                    className={(props.orders[props.orderPosition].state === "in preparation") && (props.orders[props.orderPosition].chef === props.chefName) ? styles.checkbox : styles.none}
                                    type="checkbox" onChange={() => HandleOnChange(key)} defaultChecked={props.checkedState > 0 ? props.checkedState[props.orderPosition][key] : false}></input>
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
