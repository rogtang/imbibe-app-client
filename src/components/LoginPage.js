import React, { Component } from "react";
import "./LoginPage.css";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-service";
import ValidationError from "./validation-error";

class LoginPage extends Component {
  static defaultProps = {
    handleLoginSuccess: () => {},
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
    };
  }

  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    window.location.assign("/cocktails");
    /*const { location, history } = this.props
    const destination = (location.state || {}).from || '/posts'
    history.push(destination)*/
  };

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

  handleSubmitJwtAuth = (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { username, password } = e.target;

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((res) => {
        username.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.authToken);
        this.handleLoginSuccess();
      })
      .catch((res) => {
        this.setState({ error: res.error });
        alert("Sorry, email or password was not found. Please try again.");
      });
  };

  validateUsername() {
    const username = this.state.username.value.trim();
    if (username.length === 0) {
      return "Username/email is required";
    } else if (username.length < 5) {
      return "Username must be at least 5 characters long";
    }
  }

  validatePassword() {
    const password = this.state.password.value.trim();
    if (password.length < 5 || password.length > 72) {
      return "Password must be between 5 and 72 characters long";
    }
  }

  render() {
    return (
      <div className="login-wrapper">
        <div className="login">
          <h1>Welcome Back</h1>
          <div className="login__form">
            <form
              id="login-id"
              className="LoginForm"
              onSubmit={this.handleSubmitJwtAuth}
            >
              <h2 className="login-header">Login</h2>
              <div className="login__form__credentials">
                <label
                  className="login_register_label"
                  htmlFor="LoginForm__username"
                >
                  Enter your email/username:
                </label>
                <input
                  type="text"
                  placeholder="Email address"
                  name="username"
                  id="LoginForm__username"
                  onChange={(e) => this.updateUsername(e.target.value)}
                  required
                />
                {this.state.username.touched && (
                  <ValidationError message={this.validateUsername()} />
                )}
                <label
                  className="login_register_label"
                  htmlFor="LoginForm__password"
                >
                  Enter your password:
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={(e) => this.updatePassword(e.target.value)}
                  required
                />
                {this.state.password.touched && (
                  <ValidationError message={this.validatePassword()} />
                )}
              </div>
              <div className="login__form__controls">
                <input
                  type="submit"
                  value="Sign In"
                  className="login__form__btn"
                />
              </div>
              <p className="test-login-credentials">
                Please use demo@demo.com and password123 to demo the site.
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
