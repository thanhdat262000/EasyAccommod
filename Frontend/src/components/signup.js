import React, { Component } from "react";
import getFormData from "get-form-data";
import axios from "axios";
import "../css/signup.css";
import Cancel from "../image/cancel.svg";
import ListInput from "./loginDetails/listInput";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { continueSignup: false };
    this.OnContinue = this.OnContinue.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onCancel(e) {
    e.target.parentNode.parentNode.style.display = "none";
    if (this.state.continueSignup) {
      this.setState({ continueSignup: !this.state.continueSignup });
      document.getElementsByClassName("signup-form-step-1")[0].style.display =
        "block";
      document.getElementsByClassName("signup-form-step-2")[0].style.display =
        "none";
    }
  }
  OnContinue(e) {
    let form = document.querySelector("#signup-form");
    let { email, password, re_password } = getFormData(form);
    if (
      this.validateEmail(email) &&
      this.validatePassword(password) &&
      this.validateRepassword(password, re_password)
    ) {
      if (!this.state.continueSignup) {
        this.setState({ continueSignup: !this.state.continueSignup });
        document.getElementsByClassName("signup-form-step-1")[0].style.display =
          "none";
        document.getElementsByClassName("signup-form-step-2")[0].style.display =
          "block";
      } else return;
    } else {
      if (!this.validateEmail(email))
        document.getElementsByClassName("email-alert")[0].innerHTML =
          "Email chưa đúng";
      else document.getElementsByClassName("email-alert")[0].innerHTML = "";
      if (!this.validatePassword(password))
        document.getElementsByClassName("password-alert")[0].innerHTML =
          "Mật khẩu không thể để trống";
      else document.getElementsByClassName("password-alert")[0].innerHTML = "";
      if (!this.validateRepassword(password, re_password))
        document.getElementsByClassName("repassword-alert")[0].innerHTML =
          "Nhập lại mật khẩu chưa đúng";
      else
        document.getElementsByClassName("repassword-alert")[0].innerHTML = "";
    }
  }
  onSubmit() {
    let form = document.querySelector("#signup-form");
    let data = getFormData(form);
    axios
      .post("http://localhost:8000/register/", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(JSON.stringify(data));
  }
  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  validatePassword = (password) => {
    return password !== "";
  };
  validateRepassword = (password, repassword) => {
    return password === repassword;
  };
  render() {
    return (
      <div className="signup-bg">
        <div className="signup">
          <img
            src={Cancel}
            width={15}
            height={15}
            alt="cancel"
            onClick={this.onCancel}
          />
          <form
            name="signup-form"
            id="signup-form"
            onSubmit={this.onSubmit}
            // method="POST"
            // encType="multipart/form-data"
          >
            <div className="title">
              <h2>Đăng kí</h2>
            </div>
            <div className="signup-form-step-1">
              <div className="signup-input">
                <div className="signup-input-email">
                  <input name="email" placeholder="Địa chỉ email"></input>{" "}
                  <span className="email-alert alert"></span>
                </div>
                <div className="signup-input-password">
                  {" "}
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                  ></input>
                  <span className="password-alert alert"></span>
                </div>
                <div className="signup-input-repassword">
                  {" "}
                  <input
                    name="re_password"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                  ></input>
                  <span className="repassword-alert alert"></span>
                </div>
              </div>

              <div className="buttons">
                <button
                  type="button"
                  name="continue-signup"
                  onClick={this.OnContinue}
                >
                  Tiếp tục đăng kí
                </button>
                <button type="button" name="redirect-login">
                  Đăng nhập
                </button>
              </div>
            </div>
            <div className="signup-form-step-2">
              <ListInput />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
