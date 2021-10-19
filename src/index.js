import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sobre from './Components/Sobre';
import Horarios from './Components/Horarios';
import Agendamentos from './Components/Agendamentos';
import Login from './Components/Login.js';
import Conta from './Components/Conta';
import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar
import 'materialize-css/dist/css/materialize.min.css'

ReactDOM.render(
  <BrowserRouter>
      <Switch>
                <Route path="/Inicio" exact={true} component={App} />
                <Route path="/Sobre" component={Sobre} />
                <Route path="/Horarios" component={Horarios} />
                <Route path="/Agendamentos" component={Agendamentos} />
                <Route path="/Login" component={Login} />
                <Route path="/Conta" component={Conta} />

      </Switch>
  </BrowserRouter>,    
  document.getElementById('root')
);
