import React,{ useState,  useEffect} from 'react';
import styles from './order.module.scss';

function Order(props) {
        const [table, setTable] = useState('mesa1');
        let total = 0;
        const [arrayPrices, setArrayPrices] = useState(props.orderedProducts.map((elem)=>{
            return elem[2]
        }))
        
        // useEffect(()=>{
        //     const arrayPrices = props.orderedProducts.map((elem)=>{
        //         return elem[2]
        //     });
        //     setArrayPrices(arrayPrices)
        // },[props.orderedProducts])
;
        
        function handleChange(e){
            setTable(e.target.value)
        }

        function decreaseProduct(key){
            let newArray = [...props.orderedProducts];
            let newArrayPrices = [...arrayPrices];
            if(newArray[key][1] > 1){
                newArray[key][1] = newArray[key][1] - 1;
                newArrayPrices[key] = props.orderedProducts[key][2] * newArray[key][1];                
                props.setOrderedProducts(newArray);
                setArrayPrices(newArrayPrices);
            }            
        }
        
        function increaseProduct(key){
            let newArray = [...props.orderedProducts];
            let newArrayPrices = [...arrayPrices];
            newArray[key][1] = newArray[key][1] + 1;
            //arraprices[key] = props.orderedProducts[key][2] * newArray[key][1];
            newArrayPrices[key] = props.orderedProducts[key][2] * newArray[key][1]; 
            props.setOrderedProducts(newArray);
            setArrayPrices(newArrayPrices);
        }
        
        function deleteProduct(key){
            let array = [...props.orderedProducts]; 
            array.splice(key, 1);
            props.setOrderedProducts(array);
        }
        function deleteAll(){
            props.setOrderedProducts([]);
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
                                    total = total + arrayPrices[key];
                                    let detailsProduct = ((element[0] !== undefined) && (element[0].includes('Hamburguesa'))) ? styles.specificDetailsProduct : styles.noSpecificDetailsProduct;
                                    return(
                                        <div key={key} className={styles.bodyBox}>
                                            <div className={styles.detailsProduct}>
                                                <p>{element[0]}</p> 
                                                <div className={detailsProduct}>
                                                    <p>{element[3]}</p>
                                                    <p>{element[4]}</p> 
                                                </div>
                                            </div>
                                            <div className={styles.amountProduct}>
                                                <button className={styles.decreaseProduct} onClick={()=>decreaseProduct(key)}></button>
                                                <p>{ element[1]}</p>
                                                <button className={styles.addProduct} onClick={()=>increaseProduct(key)}></button>
                                            </div>
                                            <p className={styles.price}>$ {arrayPrices[key]}</p>
                                            <button className={styles.trashButton} onClick={()=>deleteProduct(key)}></button>
                                        </div>
                                    )
                                })
                            } 
                        </div>       
                        <div className={styles.totalPrice}>
                            <p>Total</p>
                            <p>${total}</p>
                        </div>             
                    </div>
                    <div className={styles.buttonsDown}>
                        <button className={styles.buttonCancelOrder} onClick={() => deleteAll()}>
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