import { React, Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../css/cadastro.css";
import "materialize-css";
import axios from "axios";

import TextField from "@mui/material/TextField";
import { HomeRounded } from "@mui/icons-material";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import "jquery-mask-plugin/dist/jquery.mask.min";
import Cookies from "js-cookie";

import $ from "jquery";

export default class Cadastrar extends Component {
  componentDidMount() {
    $("#celular").mask("(00) 00000-0000");
    $("#CPF").mask("000.000.000-00", { reverse: false });
  }

  state = {
    nome: "",
    telefone: "",
    endereco: "",
    cpf: "",
    nivel: 2,
    email: "",
    senha: "",
    mensagem: "",
  };

  Cadastrar = () => {
    axios
      .post("http://localhost:8080/mestreBarbearia/usuario", {
        nome: this.state.nome,
        telefone: this.state.telefone,
        endereco: this.state.endereco,
        cpf: this.state.cpf,
        nivel: 2,
        email: this.state.email,
        senha: this.state.senha,
      })
      .then(() => {
        this.setState({ mensagem: "Criado com sucesso !" });
        console.log("Deu bom.");
        $("#mensagem").removeClass("hide");
        $("#mensagem").addClass("show sucesso");

        Cookies.set("IsLoggedIn", "S");

        if(this.state.nivel === 1){
          Cookies.set("isADM", "S");
        }
        else{
          Cookies.set("isADM", "N");
        }

        setTimeout(function() {
          window.location.href = '/Inicio';
      }, 5000);
    }).catch(() => {
        this.setState({ mensagem: "Não foi possivel realizar o cadastro,tente novamente mais tarde!" });

        $("#mensagem").removeClass("hide");
        $("#mensagem").addClass("show erro");
      });
  };
  render() {
    return (
      <>
        <Navbar />
        <div className="container cadastro z-depth-4">
          <div className="row">
            <div className="row">
              <span className="hide" id="mensagem">
                {this.state.mensagem}
              </span>
            </div>
            <div className="col s12 l4 center form-group">
              <TextField
                style={{ marginLeft: "10px !important" }}
                fullWidth
                required
                id="outlined-required"
                label="Nome"
                autoComplete="off"
                value={this.state.nome}
                onChange={(e) => this.setState({ nome: e.target.value })}
              />
            </div>
            <div className="col s12 l4 form-group">
              <TextField
                style={{ marginLeft: "10px !important" }}
                fullWidth
                id="CPF"
                required
                label="CPF"
                value={this.state.cpf}
                onChange={(e) => this.setState({ cpf: e.target.value })}
                type="text"
              />
            </div>
            <div className="col s12 l4 form-group">
              <TextField
                style={{ marginLeft: "10px !important" }}
                fullWidth
                id="celular"
                required
                label="Celular"
                type="text"
                autoComplete="off"
                value={this.state.telefone}
                onChange={(e) => this.setState({ telefone: e.target.value })}
              />
            </div>
            <div className="col s12 l4 form-group">
              <TextField
                style={{ marginLeft: "10px !important" }}
                fullWidth
                required
                id="endereco"
                label="Endereço: "
                autoComplete="off"
                value={this.state.endereco}
                onChange={(e) => this.setState({ endereco: e.target.value })}
              />
            </div>
            <div className="col s12 l4 form-group">
              <TextField
                style={{ marginLeft: "10px !important" }}
                fullWidth
                required
                id="email"
                label="E-mail"
                autoComplete="off"
                type="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <div className="col s12 l4 form-group">
              <TextField
                style={{ marginLeft: "10px !important" }}
                fullWidth
                required
                id="outlined-password-input"
                label="Senha"
                type="password"
                autoComplete="off"
                value={this.state.senha}
                onChange={(e) => this.setState({ senha: e.target.value })}
              />
            </div>
            <div className="row">
              <div className="col s6 l6 left form-group">
                <Link
                  to="/Inicio"
                  className="btn red left darken-2 buttons-cadastrar"
                >
                  <HomeRounded className="left tiny icons-button" />
                  Inicio
                </Link>
              </div>
              <div className="col s6 l6 right form-group">
                <button
                  onClick={this.Cadastrar}
                  className="btn right green waves-effect buttons-cadastrar"
                >
                  <AddBoxRoundedIcon className="left tiny icons-button" />
                  Cadastrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
