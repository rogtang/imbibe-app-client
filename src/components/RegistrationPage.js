import React, { Component } from "react";
import "./RegistrationPage.css";
import AuthApiService from "../services/auth-api-service";
import ValidationError from "./validation-error";

class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      username: {
        value: "",
        touched: false,
      },
      password: {
        value: "",
        touched: false,
      },
      error: "",
    };
  }

  updateUsername(username) {
    this.setState({
      username: {
        value: username,
        touched: true,
      },
    });
  }

  updatePassword(pw) {
    this.setState({
      password: {
        value: pw,
        touched: true,
      },
    });
  }

  updateError(error) {
    this.setState({
      error,
    });
  }

  handleRegistrationSuccess = (user) => {
    //or try: window.location = '/login'
    const { history } = this.props;
    history.push("/login");
  };

  handleSubmit = (ev) => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        username.value = "";
        password.value = "";
        this.handleRegistrationSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
        alert(
          "Sorry, that email is already used. Please try a different email."
        );
      });
  };

  validateUsername() {
    const username = this.state.username.value.trim();
    if (username.length === 0) {
      return "Please enter your email address";
    } else if (username.length < 5) {
      return "Email must be at least 5 characters long";
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    }
  }

  render() {
    return (
      <div className="register-wrapper">
        <div className="register">
          <h1>Create An Account </h1>
          <div className="register__form">
            <form
              id="register-id"
              className="RegistrationForm"
              onSubmit={this.handleSubmit}
            >
              <h2 className="register-header">Register</h2>
              <div className="register__form__credentials">
                <label htmlFor="RegistrationForm__username">
                  Email address:{" "}
                </label>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  name="username"
                  id="RegistrationForm__username"
                  onChange={(e) => this.updateUsername(e.target.value)}
                  required
                />
                {this.state.username.touched && (
                  <ValidationError message={this.validateUsername()} />
                )}
                <label htmlFor="RegistrationForm__password">Password: </label>
                <input
                  type="password"
                  placeholder="Choose a password"
                  name="password"
                  id="RegistrationForm__password"
                  onChange={(e) => this.updatePassword(e.target.value)}
                  required
                />
                {this.state.password.touched && (
                  <ValidationError message={this.validatePassword()} />
                )}
              </div>
              <div className="register__form__controls">
                <input
                  type="submit"
                  value="Register"
                  className="register__form__btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
