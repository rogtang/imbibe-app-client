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
      error: null,
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
        
      });
  };

  validateUsername() {
    const username = this.state.username.value.trim();
    if (username.length === 0) {
      return <p className='input-error'>Please enter your an email address </p>
    } else if (username.length < 5) {
      return <p className='input-error'>Email address must be at least 5 characters long</p>
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length === 0) {
      return "Password is required";
    } else if (password.length < 5) {
      return <p className='input-error'>Password must be between 5 - 72 characters long</p>
    }
  }

  render() {
    const { error } = this.state;
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
              <div className="register__form__credentials">
                <label htmlFor="RegistrationForm__username">
                  Register with an email address:{" "}
                </label>
                <input
                  type="email"
                  placeholder="Must be at least 5 characters..."
                  name="username"
                  id="RegistrationForm__username"
                  onChange={(e) => this.updateUsername(e.target.value)}
                  required
                />
                {this.state.username.touched && (
                  <ValidationError message={this.validateUsername()} />
                )}
                <label htmlFor="RegistrationForm__password">Choose a password: </label>
                <input
                  type="password"
                  placeholder="Must be at least 5 characters..."
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
          <div className="EditPost__error" role="alert">
          {error && (
            <p>Could not create account, please make sure your email and/or password is valid.</p>
          )}
        </div>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
