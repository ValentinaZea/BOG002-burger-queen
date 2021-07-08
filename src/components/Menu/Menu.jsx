import React, { useState } from 'react';
import styles from './menu.module.scss';
import Product from '../Product/Product.jsx'

function Menu (props) {
    let firstCategory, secondCategory, thirdCategory, textFirstCategory, 
        textSecondCategory, textThirdCategory, breakfast, lunch ;
    const [category, setCategory] = useState("breakfast");
    const [subCategory, setSubCategory] = useState("firstCategory");

    function subCategorySelected (subCategory) {
        switch (subCategory) {
            case "firstCategory":
                firstCategory  = styles.dishSelected;
                secondCategory = styles.dishNoSelected;
                thirdCategory  = styles.dishNoSelected;
                break;
            case "secondCategory":
                firstCategory  = styles.dishNoSelected;
                secondCategory = styles.dishSelected;
                thirdCategory  = styles.dishNoSelected;
                break;
            case "thirdCategory":
                firstCategory  = styles.dishNoSelected;
                secondCategory = styles.dishNoSelected;
                thirdCategory  = styles.dishSelected;
                break;
            default:
                break;
        }       
    }
    if (category === "breakfast"){
        textFirstCategory = 'Para Comer';
        textSecondCategory = 'Bebidas Calientes';
        textThirdCategory = 'Bebidas Frías';
        breakfast = styles.dishSelected;
        lunch = styles.dishNoSelected;
        subCategorySelected (subCategory);
    }else {
        textFirstCategory = 'Hamburguesas';
        textSecondCategory = 'Acompañantes';
        textThirdCategory = 'Bebidas';
        breakfast = styles.dishNoSelected;
        lunch = styles.dishSelected;
        subCategorySelected (subCategory);
    }
    function addProduct(item){
        props.product(item);
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.menuTitle}>
                <h1>MENÚ</h1>
                <hr />
            </div>
            <div className={styles.otherColumn}>
                <div className={styles.categoryColumn}>
                    <button className={styles.firstCategory} id={firstCategory} onClick={() => setSubCategory("firstCategory")}>
                        <p className={styles.textCategory}>{textFirstCategory}</p>
                    </button>
                    <button className={styles.secondCategory} id={secondCategory} onClick={() => setSubCategory("secondCategory")}>
                        <p className={styles.textCategory}>{textSecondCategory}</p>
                    </button>
                    <button className={styles.thirdCategory} id={thirdCategory} onClick={() => setSubCategory("thirdCategory")}>
                        <p className={styles.textCategory}>{textThirdCategory}</p>
                    </button>
                </div>
                <div className ={styles.menuColumn}>
                    <div className={styles.categoryTitleContainer}>
                        <div className={styles.column}>
                            <button className={styles.breakfast} id={breakfast} onClick={() => setCategory("breakfast")}>Desayuno</button>
                        </div>
                        <div className={styles.column}>
                            <button className={styles.lunch} id={lunch} onClick={() => setCategory("lunch")}>Almuerzo/Cena</button>
                        </div>
                    </div>
                    <div className={styles.menuContainer}>
                        <Product category={category} subCategory={subCategory} product={(item) => addProduct(item)}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu