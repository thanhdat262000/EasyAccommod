import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../../css/screens/apartmentManagement/postedApartment.css";

class PostedApartment extends Component {
  state = {};
  render() {
    const { apartment, onChangeRented, onChangeDeleted } = this.props;
    let buttons;
    switch (apartment.status) {
      case "Đã được duyệt":
        buttons = (
          <div className="posted-apartment-action">
            <button
              id="rented"
              onClick={() => onChangeRented(apartment.apartment_id)}
            >
              Đã cho thuê
            </button>
            <button
              id="cancel"
              onClick={() => onChangeDeleted(apartment.apartment_id)}
            >
              Ngừng đăng
            </button>
          </div>
        );
        break;
      case "Chưa được duyệt":
        buttons = (
          <div className="posted-apartment-action">
            <button
              id="edit"
              onClick={() => {
                this.props.history.push("/apartment-post");
              }}
            >
              Chỉnh sửa
            </button>
          </div>
        );
        break;
      case "Đã thuê":
        buttons = (
          <div className="posted-apartment-action">
            <button id="delete">Xóa</button>
          </div>
        );
        break;
      case "Đã hết hạn":
        buttons = (
          <div className="posted-apartment-action">
            <button id="delay-expiration">Gia hạn thêm</button>
            <button id="delete">Xóa</button>
          </div>
        );
        break;
      default:
        break;
    }
    return (
      <div className="posted-apartment">
        <a
          href={`apartment/${apartment.apartment_id}`}
          className="posted-apartment-link"
        >
          <div className="posted-apartment-property">
            <div className="posted-apartment-main-details">
              <img
                src="https://picsum.photos/id/1/200/300"
                alt="posted-apartment"
              />
              <div className="posted-apartment-main-info posted-apartment-section">
                <span id="rem" className="posted-apartment-main-info-address">
                  {apartment.city}, {apartment.district}
                </span>
                <span className="posted-apartment-main-info-price">
                  {apartment.price} VNĐ/Tháng
                </span>
              </div>
            </div>
            <div className="posted-apartment-statistics posted-apartment-section">
              <div className="posted-apartment-statistics-type">
                <span id="rem">Loại phòng: </span>
                <span id="statistic">{apartment.apartment_type}</span>
              </div>
            </div>
            <div className="posted-apartment-more-detail posted-apartment-section">
              <div className="posted-apartment-more-detail-size">
                <span id="rem">Kích thước: </span>
                <span id="statistic">{apartment.square}m2</span>
              </div>
            </div>
            <div className="posted-apartment-expiration">
              <span id="rem">Quá hạn: </span>
              <span id="statistic">{apartment.expiration}</span>
            </div>
          </div>
        </a>
        {buttons}
      </div>
    );
  }
}

export default withRouter(PostedApartment);
