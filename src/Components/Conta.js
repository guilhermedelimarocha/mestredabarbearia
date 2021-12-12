import React, {Component} from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import 'materialize-css/dist/css/materialize.min.css'

export default class Conta extends Component {
    render(){
    return(
        <div>
            <Navbar/>
            <div className="container">Conta</div>
            <Footer/>
        </div>

    );
}}