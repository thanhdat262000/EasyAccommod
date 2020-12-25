import React from "react";

import "../../css/header.css";
import Building from "../../image/building.svg";
import Noti from "../../image/bell.svg";
import DropDownMenu from "./dropDownMenu";
import { connect } from "react-redux";
import { getLoginState, getPrivilege } from "../../redux/selector/selectors";
import ListNotifications from "../screens/adminScreen/listNotifications";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNoti: false,
    };
  }
  onLoginClick(e) {
    document.getElementsByClassName("login-bg")[0].style.display = "flex";
  }
  onSignupClick(e) {
    document.getElementsByClassName("signup-bg")[0].style.display = "flex";
  }
  onShowNoti = () => {
    this.setState({
      showNoti: !this.state.showNoti,
    });
  };
  render() {
    const { privilege } = this.props;
    return (
      <div className="header">
        <div id="logo">
          <a href="/" className="link">
            <img src={Building} width={90} height={90} alt="logo" />
            <div>EasyAccommod </div>
          </a>
        </div>
        {privilege === "owner" ? (
          <div className="notification-view">
            <div className="noti" onClick={this.onShowNoti}>
              <img src={Noti} alt="noti" width={20} height={20} />
              <span>Thông báo</span>
            </div>
            {this.state.showNoti ? (
              <div className="list-noti">
                <h1>Thông báo</h1>
                <ListNotifications />
              </div>
            ) : null}
          </div>
        ) : null}
        {this.props.isLogin ? (
          <DropDownMenu />
        ) : (
          <div id="right-header">
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
  (state) => ({
    isLogin: getLoginState(state),
    privilege: getPrivilege(state),
  }),
  null
)(Header);
