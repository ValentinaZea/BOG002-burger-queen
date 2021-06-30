import React, { Component, useState }from 'react'
import styles from './menu.module.scss'

function Menu () {
    let firstCategory, secondCategory, thirdCategory, textFirstCategory, textSecondCategory, textThirdCategory ;
    const [category, setCategory] = useState("breakfast");
    if (category === "breakfast"){
        textFirstCategory = 'Para Comer';
        textSecondCategory = 'Bebidas Calientes';
        textThirdCategory = 'Bebidas Frías';
    }
    else {
        textFirstCategory = 'Hamburguesas';
        textSecondCategory = 'Acompañantes';
        textThirdCategory = 'Bebidas';
    }
    return (
        <div className={styles.mainContainer}>
            <div className={styles.menuTitle}>
                <h1>MENÚ</h1>
                <hr />
            </div>
            <div className={styles.otherColumn}>
                <div className={styles.categoryColumn}>
                    <button className={styles.firstCategory}>
                        <p className={styles.textCategory}>{textFirstCategory}</p>
                    </button>
                    <button className={styles.secondCategory}>
                        <p className={styles.textCategory}>{textSecondCategory}</p>
                    </button>
                    <button className={styles.thirdCategory}>
                        <p className={styles.textCategory}>{textThirdCategory}</p>
                    </button>
                </div>
                <div className ={styles.menuColumn}>
                    <div className={styles.column}>
                        <button className={styles.breakfast} onClick={() => setCategory("breakfast")}>Desayuno</button>
                    </div>
                    <div className={styles.column}>
                        <button className={styles.lunch} onClick={() => setCategory("lunch")}>Almuerzo/Cena</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Menu