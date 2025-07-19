import { Component } from "react";

import "./LoginForm.css";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = { userName: "", password: "" };
  }

  submit = (event) => {
    event.preventDefault();

    console.log("Username: ", this.state.userName);
    console.log("Password: ", this.state.password);
    this.setState({ userName: "", password: "" });
    alert("Logged in successfully!");
  };

  render() {
    return (
      <div className="login-container">
        <form className="login-form" onSubmit={this.submit}>
          <h1>Login with your username and password</h1>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            id="username"
            value={this.state.userName}
            onChange={(e) =>
              this.setState({ ...this.state, userName: e.target.value })
            }
            type="text"
            placeholder="Enter your username..."
            required
          />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            value={this.state.password}
            onChange={(e) =>
              this.setState({ ...this.state, password: e.target.value })
            }
            type="password"
            placeholder="Enter your password..."
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
