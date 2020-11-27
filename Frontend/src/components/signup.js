import React, { Component } from "react";
import "../css/signup.css";
import Cancel from "../image/cancel.svg";
import InputCheckbox from "./loginDetails/inputCheckbox";
import InputSelection from "./loginDetails/inputSelection";
import InputField from "./loginDetails/inputField";
import ListInput from "./loginDetails/listInput";
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { continueSignup: false };
    this.OnContinue = this.OnContinue.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  onCancel(e) {
    e.target.parentNode.parentNode.style.display = "none";
    this.setState({ continueSignup: !this.state.continueSignup });
  }
  OnContinue(e) {
    this.setState({ continueSignup: !this.state.continueSignup });
  }
  render() {
    const { continueSignup } = this.state;
    return (
      <div className="signup-bg">
        {continueSignup ? (
          <ListInput onCancel={this.onCancel} />
        ) : (
          <div className="signup">
            <img
              src={Cancel}
              width={15}
              height={15}
              alt="cancel"
              onClick={this.onCancel}
            />
            <form name="signup-form">
              <div className="title">
                <h2>Đăng kí</h2>
              </div>

              <div className="signup-input">
                <input name="email" placeholder="Địa chỉ email"></input>
                <input name="password" placeholder="Mật khẩu"></input>
                <input
                  name="re-password"
                  placeholder="Nhập lại mật khẩu"
                ></input>
              </div>

              <div className="buttons">
                <button
                  type="submit"
                  name="continue-signup"
                  onClick={this.OnContinue}
                >
                  Tiếp tục đăng kí
                </button>
                <button type="button" name="redirect-login">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Signup;
