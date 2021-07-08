import React, { useState }from 'react'
import styles from './product.module.scss'
import menu from '../../menu.json';

function Product(props) {
    let categoryData, backgroundColor, addproduct, formHamburguer,  stylesOptions, addButton; 
    const [typeHamburguer, setTypeHamburger] = useState("Res");
    const [additionsSimple, setAdditionsSimple] = useState({ Huevo: false , Queso: false});
    const [additionsDoble, setAdditionsDoble] = useState({ Huevo: false , Queso: false});
    if (props.category === "breakfast"){
        formHamburguer = styles.noOptionsHamburger;
        stylesOptions = styles.priceAddDivNoOptions;
        backgroundColor = styles.productCardBreakfast;
        addproduct = styles.addProductBreakfast;
        switch (props.subCategory) {
            case "firstCategory":
                categoryData = menu.Desayuno[0]['Para Comer'];
                break;
            case "secondCategory":
                categoryData = menu.Desayuno[0]['Bebidas Calientes'];
                break;
            case "thirdCategory":
                categoryData = menu.Desayuno[0]['Bebidas Frías'];
                break;
            default:
                break;
        }        
    }
    else {
        addproduct = styles.addProductLunch;
        switch (props.subCategory) {
            case "firstCategory":
                categoryData = menu.Almuerzo[0]['Hamburguesas'];
                formHamburguer = styles.optionsHamburger;
                stylesOptions = styles.priceAddDivOptions
                backgroundColor = styles.productCardLunchHamburger;
                addButton = styles.noOptionsHamburger;
                break;
            case "secondCategory":
                categoryData = menu.Almuerzo[0]['Acompañamientos'];
                formHamburguer = styles.noOptionsHamburger;
                stylesOptions = styles.priceAddDivNoOptions;
                backgroundColor = styles.productCardLunch;
                break;
            case "thirdCategory":
                categoryData = menu.Almuerzo[0]['Bebidas'];
                formHamburguer = styles.noOptionsHamburger;
                stylesOptions = styles.priceAddDivNoOptions
                backgroundColor = styles.productCardLunch;
                break;
            default:
                break;
        }
    }
    function addProduct(item, precio){
        //console.log(additions)
        console.log("additions simple " + additionsSimple.Huevo + additionsSimple.Queso)
        console.log("additions doble " + additionsDoble.Huevo + additionsDoble.Queso)
        let sendArray = [];
        if(item.includes('Hamburguesa')){
            let addition = item.includes('Simple') ? additionsSimple : additionsDoble;
            let arrayAdditions = [];
            for (const prop in addition) {
                if(addition[prop] === true) 
                arrayAdditions.push(prop);
            }
        sendArray = arrayAdditions.length >0 ? [item, precio, typeHamburguer, arrayAdditions] : [item, precio, typeHamburguer]
        }
        else{
            sendArray = [item, precio];
        }
        props.product(sendArray);
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
    return (
        <div className={styles.menuContainer}>
            {categoryData.map((data, key) => {
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
                                <div className={styles.inputRadioButton}><input onChange={() => setTypeHamburger("Res")} type="radio" value="Res" name="typeHamburguer" defaultChecked/> Res </div>
                                <div className={styles.inputRadioButton}><input onChange={() => setTypeHamburger("Pollo")} type="radio" value="Pollo" name="typeHamburguer" /> Pollo </div>
                                <div className={styles.inputRadioButton}><input onChange={() => setTypeHamburger("Vegetariana")} type="radio" value="Vegetariana" name="typeHamburguer" /> Vegetariana </div>
                            </div>
                            <div className={styles.textAdditions}><p>Adiciones</p><p>$1</p></div>
                            <div className={styles.containerCheckAdd}>
                                <div className={styles.containerCheckBox}>
                                    <div><input id={"adicion huevo "+ data.Item} onChange={(event) => handleOnChange(event)} type="checkbox" value="Huevo" name="typeAdition" /> Huevo </div>                                
                                    <div><input id={"addition queso "+ data.Item} onChange={(event) => handleOnChange(event)} type="checkbox" value="Queso" name="typeAdition" /> Queso </div>
                                </div>                                
                                <button className={addproduct} type="button" onClick={() => addProduct(data.Item, data.Precio)}></button>
                            </div>
                        </form>
                        <button id={addButton} className={addproduct} onClick={() => addProduct(data.Item, data.Precio)}></button>
                    </div>
                </div>
            );
            })}
        </div>
    )
}
export default Product;
