import { React, Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../css/cadastro.css";
import "materialize-css";

import TextField from "@mui/material/TextField";
import { HomeRounded } from "@mui/icons-material";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import 'jquery-mask-plugin/dist/jquery.mask.min'; 

import $ from "jquery";

export default class Cadastrar extends Component {
  componentDidMount() {
    $("#celular").mask("(00) 00000-0000");
    $("#CPF").mask("000.000.000-00", { reverse: true });
  }
  render() {
    return (
      <>
        <Navbar />
        <form id="cadastrar">
          <div className="container cadastro z-depth-4">
            <div className="row">
              <div className="col s12 l4 center form-group">
                <TextField
                  style={{ marginLeft: "10px !important" }}
                  fullWidth
                  required
                  id="outlined-required"
                  label="Nome"
                  defaultValue=""
                />
              </div>
              <div className="col s12 l4 form-group">
                <TextField
                style={{ marginLeft: "10px !important" }}
                  fullWidth
                  id="CPF"
                  required
                  label="CPF"
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
                />
              </div>
              <div className="col s12 l4 form-group">
                <TextField
                style={{ marginLeft: "10px !important" }}
                  fullWidth
                  required
                  id="endereco"
                  label="Endereço: "
                  defaultValue=""
                />
              </div>
              <div className="col s12 l4 form-group">
                <TextField
                style={{ marginLeft: "10px !important" }}
                  fullWidth
                  required
                  id="email"
                  label="E-mail"
                  defaultValue=""
                />
              </div>
              <div className="col s12 l4 form-group">
                <TextField
                style={{ marginLeft: "10px !important" }}
                  fullWidth
                  required
                  id="outlined-password-input"
                  label="Senha"
                  type="text"
                  autoComplete="current-password"
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
        </form>
      </>
    );
  }
}
