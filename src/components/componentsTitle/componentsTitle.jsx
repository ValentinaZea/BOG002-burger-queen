import React from 'react';
import styles from '../componentsTitle/componentsTitle.module.scss'

function ComponentsTitle(props){
    return(      
        <div className={styles.containerTitles}>
            <div className={styles.title}>
                <h1>{props.leftTitle}</h1>
                <hr />
            </div>
            <div className={styles.title}>
                <h1>{props.rightTitle}</h1>
                <hr />
            </div> 
        </div>
    )
}

export default ComponentsTitle
