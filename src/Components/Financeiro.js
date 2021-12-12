import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import 'materialize-css/dist/css/materialize.min.css'

import "../css/financeiro.css";

class Financeiro extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">&nbsp;</div>
          <div className="row">
            <div className="col s12">
              <div className="row">
                <div className="col s12 l6">
                  <div className="row">
                    <div className="col s12 l10 card-valor center white z-depth-2">
                      <div className="row title black">Total Bruto:</div>
                      <div className="row valores">
                        <span className="cifao">R$</span>102.255,14
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 l6">
                  <div className="row">
                    <div className="col s12 l10 card-valor center white z-depth-2 ">
                      <div className="row title green">Total Líquido:</div>
                      <div className="row valores ">
                        {" "}
                        <span className="cifao">R$</span>57.058.36
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 l6">
                  <div className="row">
                    <div className="col s12 l10 card-valor center white z-depth-2">
                      <div className="row title black">Total Bruto:</div>
                      <div className="row valores">
                        <span className="cifao">R$</span>102.255,14
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col s12 l6">
                  <div className="row">
                    <div className="col s12 l10 card-valor center white z-depth-2 ">
                      <div className="row title green">Total Líquido:</div>
                      <div className="row valores ">
                        {" "}
                        <span className="cifao">R$</span>57.058.36
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">&nbsp;</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Financeiro;
