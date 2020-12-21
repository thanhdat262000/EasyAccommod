import React, { Component } from "react";
import Cancel from "../../../image/cancel.svg";
class ApartmentPostSuccess extends Component {
  state = {};
  render() {
    const { onClick } = this.props;
    return (
      <div className="apartment-post-success-bg">
        <div className="apartment-post-success-noti">
          <img
            src={Cancel}
            width={15}
            height={15}
            alt="cancel"
            onClick={onClick}
          />
          <span>Bạn đã đăng phòng thành công!</span>
          <a href="/">Về trang chủ</a>
        </div>
      </div>
    );
  }
}

export default ApartmentPostSuccess;
