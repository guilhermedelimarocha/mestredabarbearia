import React from "react";
import "../../css/cardlogin.css";
import logo from "../../img/adm/logobranca.png";

export default function Card() {
  return (
    <div>
      <div class="section"></div>
      <main>
        <center>
          <img
            class="responsive-img" alt="logo"
            style={{width:375}}
            src={logo}
          />

          <h5 class="grey-text" style={{fontSize: 15, marginTop: -15}}>Por favor, acesse  sua conta !</h5>
          <div class="section"></div>

          <div class="container ">
            <div
              class="z-depth-1 grey lighten-4 row card-login"
              style={{display: 'inline-block', padding: '32px 48px 0px 48px', border: '1px solid #EEE', marginTop: -20}}
            >
              <form class="col s12" method="post" action="valida-login.js">
                <div class="row">
                  <div class="col s12"></div>
                </div>

                <div class="row">
                  <div class="input-field col s12">
                    <input
                      class="validate"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <label for="email">Email: </label>
                  </div>
                </div>

                <div class="row">
                  <div class="input-field col s12">
                    <input
                      class="validate"
                      type="password"
                      name="password"
                      id="password"
                    />
                    <label for="password">Senha:</label>
                  </div>
                  <label style={{float: "right"}}
                  >
                    <a class="black-text" href="#!">
                      <b>Esqueceu sua senha?</b>
                    </a>
                  </label>
                  <label style={{float: "left"}}
                  >
                              <a href="#!" class="indigo-text">Criar conta</a>
                  </label>
                </div>

                <br />
                <center>
                  <div class="row">
                    <button
                      type="submit"
                      name="btn_login"
                      class="col s12 btn btn-large waves-effect grey darken-3"
                      id="entrar"
                    >
                      Entrar
                    </button>
                  </div>
                </center>
              </form>
            </div>
          </div>
        </center>

        <div class="section"></div>
        <div class="section"></div>
      </main>
    </div>
  );
}
