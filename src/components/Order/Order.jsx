import React, { useState } from 'react';
import styles from './order.module.scss';
import PopUp from '../PopUp/popUp.jsx';

function Order(props) {
        const [table, setTable] = useState('default');
        const [client, setClient] = useState('')
        const [popUp, setPopUp] = useState(false)
        const [itemPopUp, setItemPopUp] = useState([]);
        const [titlePopUp, setTitlePopUp ] = useState("");
        let total = 0;

        function saveClient(e){
            setClient(e.target.value)
        }
    
        function handleChange(e){
            setTable(e.target.value)
        }

        function decreaseProduct(key){
            let newArray = [...props.orderedProducts];
            if(newArray[key].ammount > 1){
                newArray[key].ammount = newArray[key].ammount - 1;
                newArray[key].totalPrice = props.orderedProducts[key].unitPrice * newArray[key].ammount; 
                props.setOrderedProducts(newArray);
            }            
        }
        
        function increaseProduct(key){
            let newArray = [...props.orderedProducts];
            newArray[key].ammount = newArray[key].ammount + 1;
            newArray[key].totalPrice = props.orderedProducts[key].unitPrice * newArray[key].ammount; 
            props.setOrderedProducts(newArray);
        }
        
        function deleteProduct(key){
            let array = [...props.orderedProducts]; 
            array.splice(key, 1);
            props.setOrderedProducts(array);
        }

        function sendOrder(){
            if ((client === "")  || (Array.isArray(props.orderedProducts) && !props.orderedProducts.length) || (table === 'default')) {
                alert("Por favor llene todos los campos")
            }
            else{
                let confirmedOrder = {client: client, table: table, state:'to prepare', order: [...props.orderedProducts], requestTime: new Date()};
                setItemPopUp(confirmedOrder);
                setPopUp(!popUp);
                setTitlePopUp("Confirmacion Pedido")
            }
        }

        const cancelOrder= ()=>{
            if ((Array.isArray(props.orderedProducts) && !props.orderedProducts.length)) {
                alert("Acción no válida, campos vacíos")
            }
            else{
                setPopUp(!popUp);
                setItemPopUp(["¿Desea Cancelar La Orden?"]);
                setTitlePopUp("");
            }            
        }

        return (
            <div className={styles.orderContainer}>          
                <div className={styles.hamburgerContainer}>
                    <div className={styles.headerOrder}>
                        <input className={styles.customerName} required placeholder="Nombre Cliente..." id="myText" type="text" onChange={saveClient} value={client}/>
                        <div className={styles.divDropdown}>
                            <select className={styles.dropDown} value={table} onChange={handleChange}>
                                <option className={styles.optionsDropDown} value="default" defaultValue disabled hidden>Elija mesa</option>
                                <option className={styles.optionsDropDown} value="mesa1">Mesa 1</option>
                                <option className={styles.optionsDropDown} value="mesa2">Mesa 2</option>
                                <option className={styles.optionsDropDown} value="mesa3">Mesa 3</option>
                                <option className={styles.optionsDropDown} value="mesa4">Mesa 4</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.bodyOrder}>
                        <div className={styles.boxTitle}>
                            <h2>Item</h2>
                            <h2>Cantidad</h2>
                            <h2>Precio</h2>
                        </div>   
                        <div className={styles.orderedProducts}>
                            {
                                props.orderedProducts.map((element,key) => {
                                    total = total + element.totalPrice;
                                    let detailsProduct = ((element.item !== undefined) && (element.item.includes('Hamburguesa'))) ? styles.specificDetailsProduct : styles.noSpecificDetailsProduct;
                                    return(
                                        <div key={key} className={styles.bodyBox}>
                                            <div className={styles.detailsProduct}>
                                                <p>{element.item}</p> 
                                                <div className={detailsProduct}>
                                                    <p>{element.type}</p>
                                                    <p>{element.additions}</p> 
                                                </div>
                                            </div>
                                            <div className={styles.amountProduct}>
                                                <button className={styles.decreaseProduct} onClick={()=>decreaseProduct(key)}></button>
                                                <p>{element.ammount}</p>
                                                <button className={styles.addProduct} onClick={()=>increaseProduct(key)}></button>
                                            </div>
                                            <p className={styles.price}>$ {element.totalPrice}</p>
                                            <button className={styles.trashButton} onClick={()=>deleteProduct(key)}></button>
                                        </div>
                                    )
                                })
                            } 
                        </div>       
                        <div className={styles.totalPrice}>
                            <p>Total</p>
                            <p>$ {total}</p>
                        </div>             
                    </div>
                    <div className={styles.buttonsDown}>
                        <button className={styles.buttonCancelOrder} onClick={cancelOrder}>
                            Cancelar Pedido                            
                        </button>                        
                        <button className={styles.buttonSendToKitchen} onClick={sendOrder}>
                            Enviar a la Cocina
                        </button>
                    </div>
                </div>
                <div className={popUp ? styles.popUpContainer : styles.noPopUpContainer}>
                    {popUp ? <PopUp setClient={setClient} setTable={setTable} setPopUp={setPopUp} setOrderedProducts={props.setOrderedProducts} titlePopUp={titlePopUp} itemPopUp={itemPopUp}></PopUp> : null}
                </div>
            </div>
        )
}
export default Order
