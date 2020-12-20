import React, { Component } from "react";
import "./style.css";
import Logo from "./../../assets/facebook-logo.svg";
import ProfilePicture from "./../../assets/man.png";
import Steve from "./../../assets/Steve.svg";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default class Main extends Component {
  render() {
    return (
      <div className="wrapper">
        <div id="container">
          <div className="content">
            <div className="left-content">
              <div className="facebook">
                <img src={Logo} alt="Logo Facebook" width="198" />
                <p className="recentes">Logins recentes</p>
                <span>Clique na sua foto ou adicione uma conta.</span>
              </div>
              <div className="login-users">
                <div className="card-wrapper">
                  <a href="https://github.com/AxelVarreira">
                    <img
                      src={ProfilePicture}
                      alt="Foto de perfil do primeiro usuario"
                      width="160"
                      height="160"
                    />
                    <span>Axel</span>
                  </a>
                </div>

                <div className="card-wrapper">
                  <a href="https://minecraftbrherobrine.fandom.com/pt/wiki/Steve">
                    <img
                      src={Steve}
                      alt="Foto de perfil do Steve"
                      width="160"
                      height="160"
                    />
                    <span>Steve</span>
                  </a>
                </div>

                <div className="card-wrapper">
                  <a href="https://www.youtube.com/watch?v=-mMhKYJFOnQ">
                    <AddCircleIcon fontSize="large" />
                    <span>Adicionar usuario</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="right-content">
              <div className="login-input">
                <div className="input-wrapper">
                  <input className="Input" />
                  <input className="Input" />
                  <button type="button" className="btn-entrar">
                    entrar
                  </button>
                  <a href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login">
                    Esqueceu a senha?
                  </a>
                  <button type="button" className="btn-novaConta">
                    {" "}
                    Criar nova conta
                  </button>
                </div>
                <p className="input-footer">
                  <strong>Criar uma Pagina </strong>
                  para uma celebridade, banda ou empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
