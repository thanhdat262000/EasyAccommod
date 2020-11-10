import React, { Component } from "react";
import "../css/login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="login">
        <form name="login-form" method="POST">
          <div className="title">
            <h2>Đăng nhập</h2>
          </div>
          <div className="login-input">
            <input name="email" placeholder="Địa chỉ email"></input>
            <input name="password" placeholder="Mật khẩu"></input>
          </div>
          <div className="buttons">
            <button type="submit">Đăng nhập</button>
            <button>Đăng kí</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
