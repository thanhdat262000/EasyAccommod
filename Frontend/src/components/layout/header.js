import React from "react";

import "../../css/header.css";
import Building from "../../image/building.svg";
import Noti from "../../image/bell.svg";
import DropDownMenu from "./dropDownMenu";
import { connect } from "react-redux";
import { getLoginState } from "../../redux/selector/selectors";

class Header extends React.Component {
  onLoginClick(e) {
    document.getElementsByClassName("login-bg")[0].style.display = "flex";
  }
  onSignupClick(e) {
    document.getElementsByClassName("signup-bg")[0].style.display = "flex";
  }
  render() {
    return (
      <div className="header">
        <div id="logo">
          <a href="/" className="link">
            <img src={Building} width={90} height={90} alt="logo" />
            <div>EasyAccommod </div>
          </a>
        </div>
        {this.props.isLogin ? (
          <DropDownMenu userName="Thanh Dat" />
        ) : (
          <div id="right-header">
            <div className="noti">
              <img src={Noti} alt="noti" width={20} height={20} />
              <span>Thông báo</span>
            </div>

            <div id="signIn" className="sign" onClick={this.onLoginClick}>
              Đăng nhập
            </div>

            <div id="signUp" className="sign" onClick={this.onSignupClick}>
              Đăng ký
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default connect(
  (state) => ({ isLogin: getLoginState(state) }),
  null
)(Header);
