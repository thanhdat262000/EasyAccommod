import React, { Component } from "react";
import "../../../css/background.css";
export default class Background extends Component {
  render() {
    return (
      <div className="background">
        <div className="overlay">
          <div className="title">
            <h1>EasyAccommod.com</h1>
            <h2>Trang web thuê nhà hàng đầu Việt Nam</h2>
          </div>
          <div className="buttons">
            <a href="/apartment-post">
              <button id="post">Đăng tin</button>
            </a>
            <a href="/search">
              {" "}
              <button id="search">Tìm kiếm</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
