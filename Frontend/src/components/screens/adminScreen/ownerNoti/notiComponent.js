import React, { Component } from "react";
import "../../../../css/screens/adminScreen/ownerNoti/notiComponent.css";
class NotiComponent extends Component {
  render() {
    const apartmentProps = this.props.apartmentInfo;
    const { apartment_id } = this.props.apartmentInfo;
    return (
      <div
        className="noti"
        style={{
          backgroundImage: "url(" + apartmentProps.imagePath + ")",
        }}
      >
        <a href={`/apartment/${apartment_id}`} className="main-noti">
          <div className="noti-info">
            <div className="noti-price">
              <label>{apartmentProps.price}</label>
              <span>VNĐ/Tháng</span>
            </div>
            <div className="noti-address">
              <span>{apartmentProps.city}</span>
              <span>{apartmentProps.district}</span>
            </div>
          </div>
        </a>
      </div>
      // </Link>
    );
  }
}

export default NotiComponent;
