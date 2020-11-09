import React from "react";

import "../../css/header.css";
import Building from "../../image/building.svg";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div id="logo">
          <a href="/" className="link">
            <img src={Building} width={90} height={90} alt="logo" />
            <div>EasyAccommod</div>
          </a>
        </div>
        <div id="right-header">
          <a href="#" className="link">
            <div id="signIn" className="sign">
              Đăng nhập
            </div>
          </a>
          <a href="#" className="link">
            <div id="signUp" className="sign">
              Đăng ký
            </div>
          </a>
        </div>
      </div>
    );
  }
}
