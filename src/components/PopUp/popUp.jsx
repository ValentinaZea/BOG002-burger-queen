import React from 'react'
import styles from '../PopUp/popup.module.scss';
import ProductsOrder from '../productsOrder/ProductsOrder.jsx'


function PopUp(props) {

    const arraySendPopUp = props.itemPopUp.order.map((elem)=>{
        const { unitPrice, ...newArray } = elem;
        return newArray
    })
    console.log(arraySendPopUp)

    function confirm(){
        props.setOrderedProducts([]);
        props.setPopUp(false);
    }
    

    return (
            <div className={styles.popUpBox}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>{props.titlePopUp}</h3>
                    <button className={styles.cancelAction} onClick={()=>props.setPopUp(false)}>X</button>
                </div>
                <div className={styles.bodyContainer} id="bodyContainer">
                    {
                        props.itemPopUp.length === 1 ? <p>{props.itemPopUp[0]}</p> : <ProductsOrder order={arraySendPopUp}></ProductsOrder>
                    }
                </div>
                <button className={styles.confirmButton} onClick={confirm}>
                    Confirmar
                </button>
            </div>
    )
} 
export default PopUp