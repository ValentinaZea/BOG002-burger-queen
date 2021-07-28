import React, { useState } from 'react'
import styles from './OrderDetail.module.scss'
import db from '../../firebase';

function OrderDetail(props) { 
    console.log(props.orderPosition)
    function changeFirebase(state){
        let orderId = props.orders[props.orderPosition].id;
        let orderRef = db.collection("orders").doc(orderId);
        return orderRef.update({
            state: state
        })
    }

    // function CheckedBox(){
    //     const [checkedState, setCheckedState] = useState(
    //         new Array(props.orders.length).fill(false)
    //     );
    //     console.log(checkedState);
    // }

    function sendOrder(){
        if(((props.orders.length) > 0) && (props.orders[props.orderPosition].state === "in preparation")){
            changeFirebase("to deliver")
            props.setOrderPosition(0)
        }
    }

    // const handleOnChange = (position) => {
    //     const updatedCheckedState = checkedState.map((item, index) =>
    //         index === position ? !item : item
    //     );
    //     setCheckedState(updatedCheckedState);
    //     console.log(checkedState)
    // }

    function prepareOrder(){
        if(props.orders.length > 0){
            changeFirebase("in preparation");
            // CheckedBox();
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
                            if( (elem.hasOwnProperty('type')) && (elem.hasOwnProperty('additions') )){
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
                                    <input key={key} id={"checked"+props.orderPosition} 
                                    className={props.orders[props.orderPosition].state === "in preparation" ? styles.checkbox : styles.none}
                                    type="checkbox" ></input>
                                    {/* type="checkbox" onChange={() => handleOnChange(key)} checked={checkedState[key]}></input> */}
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
                        <button className={(props.orders.length) > 0  ? styles.buttonCancelOrder : styles.disabledStart} 
                        onClick={prepareOrder}>
                            Empezar a preparar                            
                        </button>                        
                        <button 
                        className={(props.orders.length) && (props.orders[props.orderPosition].state === "in preparation") ? styles.buttonSendToDeliver : styles.disabledSend} 
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
