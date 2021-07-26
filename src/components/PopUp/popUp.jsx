import React from 'react'
import styles from '../PopUp/popup.module.scss';
import ProductsOrder from '../productsOrder/ProductsOrder.jsx';
import Logo from '../../assets/images/question.png';
import db from '../../firebase'

function PopUp(props) {
    let arraySendPopUp;
    if(props.itemPopUp[0] !== "¿Desea Cancelar La Orden?"){
        arraySendPopUp = props.itemPopUp.order.map((elem)=>{
            const { unitPrice, ...newArray } = elem;
            return newArray
        })
    }

    function confirm(){        
        if(props.itemPopUp[0] !== "¿Desea Cancelar La Orden?"){
            const orderRef = db.collection('orders')
            orderRef.add(props.itemPopUp)
            .then((docRef) => {
                let docID = docRef.id
                alert("Document written with ID: "+ docID);
            })
            .catch((error) => {
                console.log(error)
                alert("Error adding document: "+ error);
            });
        }
        props.setOrderedProducts([])
        props.setPopUp(false);
        props.setTable('default')
        props.setClient('');
    }
    

    return (
            <div className={styles.popUpBox}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>{props.titlePopUp}</h3>
                    <button className={styles.cancelAction} onClick={()=>props.setPopUp(false)}>X</button>
                </div>
                <div className={styles.bodyContainer} id="bodyContainer">
                    {
                        props.itemPopUp.length === 1 ? (
                        <div className={styles.cancelOrderContainer}>
                                <p>{props.itemPopUp[0]}</p>
                                <img src={Logo} alt="HomeIcon"></img>
                            </div>
                    ): <ProductsOrder order={arraySendPopUp}></ProductsOrder> 
                    }
                </div>
                <button className={styles.confirmButton} onClick={confirm}>
                    Confirmar
                </button>
            </div>
    )
} 
export default PopUp