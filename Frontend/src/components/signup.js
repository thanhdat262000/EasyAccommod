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
    if (!this.state.continueSignup) {
      this.setState({ continueSignup: !this.state.continueSignup });
      document.getElementsByClassName("signup-form-step-1")[0].style.display =
        "none";
      document.getElementsByClassName("signup-form-step-2")[0].style.display =
        "block";
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
                <input name="email" placeholder="Địa chỉ email"></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                ></input>
                <input
                  name="re-password"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                ></input>
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
