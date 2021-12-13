import React from "react";
import axios from "axios";
import { Send } from '@mui/icons-material';
import {Link} from 'react-router-dom';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import $ from 'jquery';
import Cookies from 'js-cookie';

import "../css/login.css";

import Card from "./Basic/Card";
import logo from "../img/adm/logobranca.png";

class Login extends React.Component {
  state = {
    email: "",
    senha: "",
    mensagemErro: "",
  };
  ValidaLogin = () => {
    axios
      .post("localhost:8080/login", {
        email: this.state.email,
        senha: this.state.senha,
        
      })
      .then(() => {
        var nivel = 3;
        this.setState({ mensagem: "Logado com Sucesso !" });
        console.log("Deu bom.");
        $("#mensagem").removeClass("hide");
        $("#mensagem").addClass("show sucesso");

        Cookies.set("IsLoggedIn", "S");

        if(nivel === 1){
          Cookies.set("isADM", "S");
        }
        else{
          Cookies.set("isADM", "N");
        }

        setTimeout(function() {
          window.location.href = '/Inicio';
      }, 5000);
      })
      .catch((erro) => {
        this.setState({ mensagemErro: erro.response.data });
      });
  };
  render() {
    return (
      <div className="container">
        {/* <CardLogin /> */}
        <Card title="Login">
          <div className="row">
            <div className="container login">
              <center>
                <img
                  class="responsive-img"
                  alt="logo"
                  style={{ width: 375 }}
                  src={logo}
                />
              </center>

              <div className="row">
                <span className="hide" id="mensagemErro">
                  {this.state.mensagemErro}
                </span>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control input-login"
                    value={this.state.email}
                    autoComplete="off"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                </div>
                <div className="input-field col s12">
                  <label htmlFor="senha">Senha: </label>
                  <input
                    type="password"
                    id="senha"
                    className="form-control input-login"
                    value={this.state.senha}
                    onChange={(e) => this.setState({ senha: e.target.value })}
                  />
                </div>
                <div className="col s6 l6 right">
                  <div
                    onClick={this.ValidaLogin}
                    className="btn green right waves-effect buttons-login"
                  >
                    <Send className="right tiny icons-button"/>
                    Logar
                  </div>
                </div>
                <div className="col s6 l6 left">
                  <Link to="/Cadastrar" className="btn red darken-2 left buttons-login">
                  <AddBoxRoundedIcon className="left tiny icons-button"/>
                    Criar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
export default Login;
