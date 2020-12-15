import React, { Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import "../css/login.css";
import Cancel from "../image/cancel.svg";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/login.action";
import { login, saveToken } from "../service/auth.service";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onCancel(e) {
    e.target.parentNode.parentNode.style.display = "none";
  }
  onSwitchToSignup = (e) => {
    document.getElementsByClassName("signup-bg")[0].style.display = "flex";
    document.getElementsByClassName("login-bg")[0].style.display = "none";
  };
  onSubmit = async (e) => {
    const { values, errors } = this.props;
    if (Object.keys(errors).length === 0) {
      const response = await login(values);
      console.log(response);
      if (response.error === "password") {
        document.getElementsByClassName("password-alert-login")[0].innerHTML =
          "Mật khẩu không chính xác";
      } else if (response.error === "email") {
        document.getElementsByClassName("email-alert-login")[0].innerHTML =
          "Email chưa được đăng kí";
      } else {
        this.props.loginAction("Thanh Dat");
        document.getElementsByClassName("login-bg")[0].style.display = "none";
        saveToken(response.token);
      }
    }
  };
  render() {
    const { values, handleChange, errors, handleBlur, touched } = this.props;
    return (
      <div className="login-bg">
        <div className="login">
          <img
            src={Cancel}
            width={15}
            height={15}
            alt="cancel"
            onClick={this.onCancel}
          />
          <form name="login-form" id="login-form">
            <div className="title">
              <h2>Đăng nhập</h2>
            </div>
            <div className="login-input">
              <div className="login-input-email">
                <input
                  name="email"
                  placeholder="Địa chỉ email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>{" "}
                <span className="email-alert-login alert">
                  {touched.email && errors.email}
                </span>
              </div>
              <div className="login-input-password">
                {" "}
                <input
                  type="password"
                  name="password"
                  placeholder="Mật khẩu"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></input>
                <span className="password-alert-login alert">
                  {touched.password && errors.password}
                </span>
              </div>
            </div>
            <div className="buttons">
              <button type="button" name="login" onClick={this.onSubmit}>
                Đăng nhập
              </button>
              <button
                type="button"
                name="signup"
                onClick={this.onSwitchToSignup}
              >
                Đăng kí
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const LoginForm = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email không hợp lệ").required("Nhập email"),
    password: Yup.string()
      .strict({ isStrict: true })
      .required("Bạn chưa nhập mật khẩu")
      .min(6, "Mật khẩu phải ít nhất 6 kí tự")
      .max(24, "Mật khẩu không được quá 24 kí tự")
      .trim("Mật khẩu không chứa dấu cách"),
  }),
})(Login);
export default connect(null, { loginAction })(LoginForm);
