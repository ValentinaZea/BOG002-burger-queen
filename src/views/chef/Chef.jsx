import React, { Component } from 'react'
import '../../App.scss';
import NavBar from '../../components/NavBar/NavBar';

class Chef extends Component {
    render(){
        const role = "chef";
    return(
        <div className="main-background">
            <NavBar role={role}></NavBar>
        </div>
    )}
}

export default Chef