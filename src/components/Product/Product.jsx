import React, { useState} from 'react'
import styles from './product.module.scss'

function Product(props) {

    let categoryData, backgroundColor, addproduct, formHamburguer,  stylesOptions, addButton; 
    const [typeHamburguerSimple, setTypeHamburgerSimple] = useState("Res");
    const [typeHamburguerDoble, setTypeHamburgerDoble] = useState("Res");
    const [additionsSimple, setAdditionsSimple] = useState({ Huevo: false , Queso: false});
    const [additionsDoble, setAdditionsDoble] = useState({ Huevo: false , Queso: false});
    // const [ checkbox, setCheckbox] = useState()
    let repeatedProduct = false;

    if (props.category === "breakfast"){
        formHamburguer = styles.noOptionsHamburger;
        stylesOptions = styles.priceAddDivNoOptions;
        backgroundColor = styles.productCardBreakfast;
        addproduct = styles.addProductBreakfast;
        switch (props.subCategory) {
            case "firstCategory":
                categoryData = props.menu.Desayuno[0]['Para Comer'];
                break;
            case "secondCategory":
                categoryData = props.menu.Desayuno[0]['Bebidas Calientes'];
                break;
            case "thirdCategory":
                categoryData = props.menu.Desayuno[0]['Bebidas Frías'];
                break;
            default:
                break;
        }        
    }
    else {
        addproduct = styles.addProductLunch;
        switch (props.subCategory) {
            case "firstCategory":
                categoryData = props.menu.Almuerzo[0]['Hamburguesas'];
                formHamburguer = styles.optionsHamburger;
                stylesOptions = styles.priceAddDivOptions
                backgroundColor = styles.productCardLunchHamburger;
                addButton = styles.noOptionsHamburger;
                break;
            case "secondCategory":
                categoryData = props.menu.Almuerzo[0]['Acompañamientos'];
                formHamburguer = styles.noOptionsHamburger;
                stylesOptions = styles.priceAddDivNoOptions;
                backgroundColor = styles.productCardLunch;
                break;
            case "thirdCategory":
                categoryData = props.menu.Almuerzo[0]['Bebidas'];
                formHamburguer = styles.noOptionsHamburger;
                stylesOptions = styles.priceAddDivNoOptions
                backgroundColor = styles.productCardLunch;
                break;
            default:
                break;
        }
    }
    function AddProduct(item, precio){
        let sendArray = {};
        const ammountProduct = 1;
        if(item.includes('Hamburguesa')){
            let addition = item.includes('Simple') ? additionsSimple : additionsDoble;
            let typeHamburguer = item.includes('Simple') ? typeHamburguerSimple : typeHamburguerDoble;
            let arrayAdditions = [];
            for (const prop in addition) {
                if(addition[prop] === true) 
                arrayAdditions.push("-"+ prop);
            }
            sendArray = arrayAdditions.length > 0 ? 
            {item: item, ammount:ammountProduct, unitPrice: precio+arrayAdditions.length, totalPrice: precio+arrayAdditions.length, type: typeHamburguer, additions: arrayAdditions} 
            : {item: item, ammount:ammountProduct, unitPrice: precio+arrayAdditions.length, totalPrice: precio+arrayAdditions.length, type: typeHamburguer}
        }
        else {
            sendArray = {item: item, ammount:ammountProduct, unitPrice: precio, totalPrice: precio};
        }   
        const arrayOrderedProducts = props.orderedProducts.map((elem) => {
            const { totalPrice, ammount , ...newArrayElem } = elem;
            return newArrayElem;
        })
        const { totalPrice, ammount , ...newArraySendArray } = sendArray;
        arrayOrderedProducts.forEach((elem) => {
            if(JSON.stringify(elem) === JSON.stringify(newArraySendArray)){
                repeatedProduct = true;
            }
        })
        if(!repeatedProduct){
            props.setOrderedProducts(products => [...products, sendArray])
        }
    }    
    const handleOnChange = (event) => {
        let set = event.target.id.includes('Simple') ? setAdditionsSimple : setAdditionsDoble;
        let addition = event.target.id.includes('Simple') ? additionsSimple : additionsDoble;
        let toggle = event.target.checked ? true : false;
            if(event.target.value === "Huevo"){
                set({...addition, Huevo: toggle });
            }
            else{
                set({...addition, Queso: toggle });
            }    
    };
    const setTypeHamburger = (type, value) => {
        let typeHamburguer = type.includes('Simple') ? setTypeHamburgerSimple : setTypeHamburgerDoble
        typeHamburguer(value);
    }
    return (
        <div className={styles.menuContainer}>
            {categoryData.map((data, key) => {
                // console.log(data.Adiciones)
            return (
                <div key={key} className={backgroundColor} >
                    <div className={styles.imageItemDiv}>
                        <img src={data.Imagen} alt="ProductImage" className={styles.productImage}/>
                        <p className={styles.textItem}>{data.Item}</p>
                    </div>
                    <div className={stylesOptions}>
                        <p className={styles.textPrice}>${data.Precio}</p>
                        <form id={formHamburguer}>
                            <div className={styles.containerRadioButton}>
                                <div className={styles.inputRadioButton}><input onChange={() => setTypeHamburger(data.Item, "Res")} type="radio" value="Res" name="typeHamburguer"/> Res </div>
                                <div className={styles.inputRadioButton}><input onChange={() => setTypeHamburger(data.Item, "Pollo")} type="radio" value="Pollo" name="typeHamburguer" /> Pollo </div>
                                <div className={styles.inputRadioButton}><input onChange={() => setTypeHamburger(data.Item, "Vegetariana")} type="radio" value="Vegetariana" name="typeHamburguer" /> Vegetariana </div>
                            </div>
                            <div className={styles.textAdditions}><p>Adiciones</p><p>$1</p></div>
                            <div className={styles.containerCheckAdd}>
                                <div className={styles.containerCheckBox}>
                                    <div><input id={"adicion huevo "+ data.Item} onChange={(event) => handleOnChange(event)} type="checkbox" value="Huevo" name="typeAdition"/> Huevo </div>                                
                                    <div><input id={"addition queso "+ data.Item} onChange={(event) => handleOnChange(event)} type="checkbox" value="Queso" name="typeAdition"/> Queso </div>
                                </div>                                
                                <button className={addproduct} type="button" onClick={() => AddProduct(data.Item, data.Precio)}></button>
                            </div>
                        </form>
                        <button id={addButton} className={addproduct} onClick={() => AddProduct(data.Item, data.Precio)}></button>
                    </div>
                </div>
            );
            })}
        </div>
    )
}
export default Product;
