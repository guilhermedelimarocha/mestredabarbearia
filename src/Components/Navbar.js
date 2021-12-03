import React from "react";
import "../css/fixed.css";
import { Link } from "react-router-dom";
import logo from "../img/adm/branca.png";
// import HomeRoundedIcon from "@material-ui/icons/HomeRounded";

export default function Navbar() {
  var isLoggedIn = "S";
  var button;
  if (isLoggedIn === "S") {
    button = <Link to="/Conta">Conta</Link>;
  } else {
    button = <Link to="/Login">Login</Link>;
  }
  return (
    <div>
      <nav>
        <div className="nav-wrapper cabecalho">
          <Link to="/Inicio" className="brand-logo">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/Inicio">
                {/* <HomeRoundedIcon style={{ fontSize: 40}} className="valign-wrapper"/>  */}
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/sobre"> <div className="">Sobre </div></Link>
            </li>
            <li>
              <Link to="/Horarios">Horarios</Link>
            </li>
            <li>
              <Link to="/Agendamentos">Agendamentos</Link>
            </li>
            <li>{button}</li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <Link to="/Inicio"> Inicio </Link>
        </li>
        <li>
          <Link to="/Sobre"> Sobre </Link>
        </li>
        
        <li>
          <Link to="/Horarios">Horarios</Link>
        </li>
        <li>
          <Link to="/Agendamentos">Agendamentos</Link>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Conta">Conta</Link>
        </li>
      </ul>
    </div>
  );
}
