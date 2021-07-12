import React,{ useState} from 'react';
import styles from './order.module.scss';

function Order(props) {
        const [table, setTable] = useState('mesa1');
        console.log(props.orderedProducts);
        
        // let detailsProduct = ((item !== undefined) && (item.includes('Hamburguesa'))) ? styles.specificDetailsProduct : styles.noSpecificDetailsProduct
        function handleChange(e){
            setTable(e.target.value)
        }
        return (
            <div className={styles.orderContainer}>          
                <div className={styles.hamburgerContainer}>
                    <div className={styles.headerOrder}>
                        <input className={styles.customerName} placeholder="Nombre Cliente..." id="myText" type="text"/>
                        <div className={styles.divDropdown}>
                            <select className={styles.dropDown} value={table} onChange={(event)=>handleChange(event)}>
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
                                    let detailsProduct = ((element[0] !== undefined) && (element[0].includes('Hamburguesa'))) ? styles.specificDetailsProduct : styles.noSpecificDetailsProduct;
                                    return(
                                        <div key={key} className={styles.bodyBox}>
                                            <div className={styles.detailsProduct}>
                                                <p>{element[0]}</p> 
                                                <div className={detailsProduct}>
                                                    <p>{element[2]}</p>
                                                    <p>{element[3]}</p> 
                                                </div>
                                            </div>
                                            <div className={styles.amountProduct}>
                                                <button className={styles.decreaseProduct}></button>
                                                <p>1</p>
                                                <button className={styles.addProduct}></button>
                                            </div>
                                            <p className={styles.price}>$ {element[1]}</p>
                                            <button className={styles.trashButton}></button>
                                        </div>
                                    )
                                })
                            } 
                        </div>       
                        <div className={styles.totalPrice}>
                            <p>Total</p>
                            <p>$50</p>
                        </div>             
                    </div>
                    <div className={styles.buttonsDown}>
                        <button className={styles.buttonCancelOrder}>
                            Cancelar Pedido                            
                        </button>                        
                        <button className={styles.buttonSendToKitchen}>
                            Enviar a la Cocina
                        </button>
                    </div>
                </div>
            </div>
        )
}
export default Order