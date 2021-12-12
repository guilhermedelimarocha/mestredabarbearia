import React  from 'react';
// import '../css/footer.css';
import '../css/fixed.css';
import 'materialize-css/dist/css/materialize.min.css'
import '../css/icons.css';
import instagram from '../icons/system/instagram.png';
import linkedin from '../icons/system/linkedin.png';

export default function Footer (){
    return (
      <div >
       
         <footer className="page-footer cabecalho-footer">
          <div className="container">
             <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Master Barber</h5>
                <p className="grey-text text-lighten-4"> A Gestão comercial que o seu estabelecimento merece. </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Redes Sociais</h5>
                <ul>
                  <li className='valign-wrapper lista-social-media'><a className="grey-text text-lighten-3" href="https://www.instagram.com/galhermelima/"><img src={instagram} className='icons-footer left' alt="rede social"/><span className='right'>Guilherme</span></a></li>
                  <li className='valign-wrapper lista-social-media'><a className="grey-text text-lighten-3" href="https://www.instagram.com/ilsonvsjunior/"><img src={instagram} className='icons-footer left' alt="rede social"/><span className='right'>Ilson</span></a></li>
                  <li className='valign-wrapper lista-social-media'><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/guilherme-de-lima-rocha-3961aa174/"><img src={linkedin} className='icons-footer left' alt="rede social"/><span className='right'>Guilherme</span></a></li>
                  <li className='valign-wrapper lista-social-media'><a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/ilson-junior-4ba917178/"><img src={linkedin} className='icons-footer left' alt="rede social"/><span className='right'>Ilson</span></a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container center">
            <span className="grey-text"> © 2021 Copyright Ilson Santos e Guilherme Rocha</span>
            </div>
          </div>
        </footer>
            
      </div>
    );
   }