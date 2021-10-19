import React, {useEffect} from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../css/sobre.css';
import M from 'materialize-css'

export default function Sobre(){
    useEffect (() => {
        M.AutoInit();
      },[]);
    return(
        <div>
            <Navbar/>
           <div className="container">
               <div className="row sobre">
                   <div className="col s12 white grey-text text-darken-4 texto-sobre z-depth-4">
                       Criada em 2021 para promover estudos e realização de um projeto para o curso de Tecnologia em Análise e desenvolvimento de sistemas (TADS), cuja matéria pertence a Projeto Integrador, ministrada pelo professor Fernando Alves de Lima.

                   </div>
               </div>
           </div>
            <Footer/>
        </div>

    );
}