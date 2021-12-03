import React from 'react';
import barbearia from '../img/corpo/barbeariainterior.jpg';
import corte from '../img/corpo/corte.jpg';
import '../css/fixed.css';
// import {Link} from 'react-router-dom';

export default function Body (){
    return (
      <div>
        <div className="parallax-container parallax-box">
      <div className="parallax"><img src={barbearia} alt="Barbearia " className="img-parallax"/></div>
    </div>
    <div className="section grey darken-4">
      <div className="row container">
        <h2 className="header">Cansado do Visual ?</h2>
        <p className="grey-text text-lighten-3">Aqui é barba, cabelo e bigode! Venha dar aquele tapa no visual. Estamos abertos o dia todo prontos para te dar o melhor atendimento. </p>
      </div>
    </div>
    <div className="parallax-container">
      <div className="parallax"><img src={corte} alt="Corte" className="img-parallax"/></div>
    </div>
      </div>
    );
    }