import React, { Component } from 'react'
import '../../App.scss';
import NavBar from '../../components/NavBar/NavBar';

class Orders extends Component {
    // const [role, setRole] = useState("");
    render() {
        const role = "orders";
    return(
        <div className="main-background">
            <h1>
                Soy Historial Ordenes
            </h1>
            <NavBar role={role}></NavBar>
        </div>
    )
    }
}

export default Orders