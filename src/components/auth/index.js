/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import styles from './styles.module.css';

import { FaTimesCircle } from "@react-icons/all-files/fa/FaTimesCircle";
class AuthView extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange(key, event) {
    const newState = {};
    newState[key] = event.target.value;
    this.setState(newState);
  }

  render() {

    return (
      <main className={styles.content}>
        <div className={styles.logger}>
          <img
            src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"}
            className={styles.logo}
          />
          <p className={styles.wellcome} >Bem vindo, {this.state.name}</p>
          <input
            className={styles.input}
            placeholder="Nome"
            disabled={this.props.loading}
            onChange={(event) => this.handleChange("name", event)}
            value={this.state.name}
          />
          <input
            className={styles.input}
            placeholder="E-mail"
            disabled={this.props.loading}
            onChange={(event) => this.handleChange("email", event)}
            value={this.state.email}
          />
          <input
            className={styles.input}
            placeholder="Senha"
            disabled={this.props.loading}
            type="password"
            onChange={(event) => this.handleChange("password", event)}
            value={this.state.password}
          />
          <button
            className={styles.button}
            disabled={this.props.loading}
            onClick={() => this.props.handleLogin(this.state)}
          >
            Entrar
        </button>
          {this.props.error && <div className={styles.errorBox}> <FaTimesCircle size="18" color=" rgb(211, 64, 64)" /> <p className={styles.errorMessage}>{this.props.error}</p></div>}
        </div>
      </main >
    );
  }
}

export default AuthView;
