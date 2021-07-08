import React,{ useState} from 'react';
import styles from './order.module.scss';

function Order(props) {
        const [table, setTable] = useState('mesa1');
        // const [messageList, setMessageList] = useState([]);
        //console.log(props.sendProduct[3]);
        function handleChange(e){
            setTable(e.target.value)
          //  console.log(e.target.value)
        }
        return (
            <div>
                <h1>ORDEN</h1>
                <hr />
                <div>
                    <input/>
                    <select value={table} onChange={(event)=>handleChange(event)}>
                        <option value="mesa1">Mesa 1</option>
                        <option value="mesa2">Mesa 2</option>
                        <option value="mesa3">Mesa 3</option>
                        <option value="mesa4">Mesa 4</option>
                    </select>
                </div>
                <div className={styles.bodyOrder}>
                    <p> Item: {props.sendProduct[0]}</p>
                    <p> precio: {props.sendProduct[1]}</p>
                    <p> tipo: {props.sendProduct[2]}</p>
                    <p> adicion : {props.sendProduct[3]}</p>
                </div>
                <div className={styles.buttonsDown}>
                    <button className={styles.buttonCancelOrder}>

                    </button>
                    <button className={styles.buttonSendToKitchen}>

                    </button>
                </div>
            </div>
        )
}
export default Order