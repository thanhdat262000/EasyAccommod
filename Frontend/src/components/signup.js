import React, { Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import getFormData from "get-form-data";
import "../css/signup.css";
import Cancel from "../image/cancel.svg";
import ListInput from "./loginDetails/listInput";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/login.action";
import { checkEmail, register } from "../service/auth.service";
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
  onSwitchToLogin = (e) => {
    document.getElementsByClassName("signup-bg")[0].style.display = "none";
    document.getElementsByClassName("login-bg")[0].style.display = "flex";
  };

  async OnContinue(e) {
    const { errors, values } = this.props;

    if (!this.validateRepassword(values.password, values.re_password))
      document.getElementsByClassName("repassword-alert-signup")[0].innerHTML =
        "Nhập lại mật khẩu chưa đúng";
    else
      document.getElementsByClassName("repassword-alert-signup")[0].innerHTML =
        "";
    if (
      !errors.email &&
      !errors.password &&
      this.validateRepassword(values.password, values.re_password)
    ) {
      if (!this.state.continueSignup) {
        this.setState({ continueSignup: !this.state.continueSignup });
        const response = await checkEmail(values.email);
        console.log(response);
        if (response.isExist === false) {
          document.getElementsByClassName(
            "signup-form-step-1"
          )[0].style.display = "none";
          document.getElementsByClassName(
            "signup-form-step-2"
          )[0].style.display = "block";
        } else {
          document.getElementsByClassName("email-alert-signup")[0].innerHTML =
            "Email đã tồn tại";
        }
      } else return;
    }
  }
  async onSubmit() {
    let form = document.querySelector("#signup-form");
    let data = getFormData(form);
    const response = await register(data);
    if (response.isRegister) {
      this.props.loginAction("Thanh Dat");
      document.getElementsByClassName("signup-bg")[0].style.display = "none";
    }
    console.log(JSON.stringify(data));
  }
  validateRepassword = (password, repassword) => {
    return password === repassword;
  };
  render() {
    const { values, handleChange, errors, handleBlur, touched } = this.props;
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
                  <input
                    name="email"
                    placeholder="Địa chỉ email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>{" "}
                  <span className="email-alert-signup alert">
                    {touched.email && errors.email}
                  </span>
                </div>
                <div className="signup-input-password">
                  {" "}
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <span className="password-alert-signup alert">
                    {touched.password && errors.password}
                  </span>
                </div>
                <div className="signup-input-repassword">
                  {" "}
                  <input
                    name="re_password"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    value={values.re_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  ></input>
                  <span className="repassword-alert-signup alert"></span>
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
                <button
                  type="button"
                  name="redirect-login"
                  onClick={this.onSwitchToLogin}
                >
                  Đăng nhập
                </button>
              </div>
            </div>
            <div className="signup-form-step-2">
              <ListInput
                values={values}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors}
                touched={touched}
                onSubmit={this.onSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const SignupForm = withFormik({
  mapPropsToValues() {
    return {
      email: "",
      password: "",
      re_password: "",
      firstName: "",
      lastName: "",
      phone: "",
      birthday: "",
      idCard: "",
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Bạn hãy nhập email"),
    password: Yup.string()
      .strict({ isStrict: true })
      .required("Bạn chưa nhập mật khẩu")
      .min(6, "Mật khẩu phải ít nhất 6 kí tự")
      .max(24, "Mật khẩu không được quá 24 kí tự")
      .trim("Mật khẩu không chứa dấu cách"),
    firstName: Yup.string()
      .required("Hãy nhập Họ")
      .matches("[a-zA-Z'-]+", "Không hợp lệ"),
    lastName: Yup.string()
      .required("Hãy nhập Tên")
      .matches("[a-zA-Z'-]+", "Không hợp lệ"),
    phone: Yup.number().typeError("Chỉ nhập số").required("Nhập số điện thoại"),
    birthday: Yup.date().typeError("Nhập ngày"),
    idCard: Yup.number().typeError("Nhập số chứng minh thư"),
  }),
})(Signup);
export default connect(null, { loginAction })(SignupForm);
