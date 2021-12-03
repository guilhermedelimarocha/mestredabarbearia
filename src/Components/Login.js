import React from "react";
import axios from "axios";

// import CardLogin from "./Basic/CardLogin";
import Card from "./Basic/Card";

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
      .then((response) => {
        console.log(response);
      })
      .catch((erro) => {
       this.setState({mensagemErro: erro.response.data})
      });
  };
  render() {
    return (
      <div className="container">
        {/* <CardLogin /> */}
        <Card title="Login">
          <div className="row">
            <span className="hide" id="mensagemErro">{this.state.mensagemErro}</span>
          </div>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            className="form-control"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <label htmlFor="senha">Senha: </label>
          <input
            type="password"
            id="senha"
            className="form-control"
            value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })}
          />
          <button
            onClick={this.ValidaLogin}
            className="btn green right waves-effect"
          >
            {" "}
            Logar
          </button>
          <button className="btn red darken-2 left"> Cadastrar</button>
        </Card>
      </div>
    );
  }
}
export default Login;
