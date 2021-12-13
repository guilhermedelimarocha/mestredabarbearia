import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sobre from './Components/Sobre';
import Horarios from './Components/Horarios';
import Financeiro from './Components/Financeiro';
import Login from './Components/Login';
import Conta from './Components/Conta';
import Cadastrar from './Components/Cadastrar';
import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar
// import 'materialize-css/dist/css/materialize.min.css'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
      <Switch>
                <Route path="/Inicio" exact={true} component={App} />
                <Route path="/Sobre" component={Sobre} />
                <Route path="/Horarios" component={Horarios} />
                <Route path="/Financeiro" component={Financeiro} />
                <Route path="/Login" component={Login} />
                <Route path="/Conta" component={Conta} />
                <Route path="/Cadastrar" component={Cadastrar} />
      </Switch>
  </BrowserRouter>,    
  document.getElementById('root')
);
registerServiceWorker();