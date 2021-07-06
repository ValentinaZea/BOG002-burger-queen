import React, { useState }from 'react'
import styles from './product.module.scss'
import menu from '../../menu.json'
import addProductRed from '../../assets/images/add_product_red.png'
import addProductYellow from '../../assets/images/add_product_yellow.png'

function Product(props) {
    let categoryData, backgroundColor, addproduct;
    if (props.category === "breakfast"){
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
        backgroundColor = styles.productCardLunch;
        addproduct = styles.addProductLunch;
        switch (props.subCategory) {
            case "firstCategory":
                categoryData = menu.Almuerzo[0]['Hamburguesas'];
                break;
            case "secondCategory":
                categoryData = menu.Almuerzo[0]['Acompañamientos'];
                break;
            case "thirdCategory":
                categoryData = menu.Almuerzo[0]['Bebidas'];
                break;
            default:
                break;
        }
    }
    function addProduct(item, precio){
        const sendArray = [item, precio];
        props.product(sendArray);
        //console.log(product)
    }
    return (
        <div className={styles.menuContainer}>
            {categoryData.map((data, key) => {
            return (
                <div key={key} className={backgroundColor}>
                    <div className={styles.imageItemDiv}>
                        <img src={data.Imagen} alt="ProductImage" className={styles.productImage}/>
                        <p className={styles.textItem}>{data.Item}</p>
                    </div>
                    <div className={styles.priceAddDiv}>
                        <p className={styles.textPrice}>${data.Precio}</p>
                        <button className={addproduct} onClick={() => addProduct(data.Item, data.Precio)}></button>
                    </div>
                </div>
            );
            })}
        </div>
    )
}
export default Product;
