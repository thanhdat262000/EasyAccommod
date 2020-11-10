import React, { Component } from "react";
import "../css/login.css";
import Cancel from "../image/cancel.svg";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onCancel(e) {
    e.target.parentNode.style.display = "none";
  }
  render() {
    return (
      <div className="login">
        <img
          src={Cancel}
          width={15}
          height={15}
          alt="cancel"
          onClick={this.onCancel}
        />
        <form name="login-form" method="POST">
          <div className="title">
            <h2>Đăng nhập</h2>
          </div>
          <div className="login-input">
            <input name="email" placeholder="Địa chỉ email"></input>
            <input name="password" placeholder="Mật khẩu"></input>
          </div>
          <div className="buttons">
            <button type="submit" name="login">
              Đăng nhập
            </button>
            <button type="button" name="signup">
              Đăng kí
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
