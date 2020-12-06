import React, { Component } from "react";
import View from "../../../image/eye.svg";
import Like from "../../../image/passion.svg";
import "../../../css/screens/apartmentManagement/postedApartment.css";

class PostedApartment extends Component {
  state = {};
  render() {
    const { apartment } = this.props;
    let buttons;
    switch (apartment.status) {
      case "approved":
        buttons = (
          <div className="posted-apartment-action">
            <button id="rented">Đã cho thuê</button>
            <button id="cancel">Ngừng đăng</button>
          </div>
        );
        break;
      case "pending":
        buttons = (
          <div className="posted-apartment-action">
            <button id="edit">Chỉnh sửa</button>
            <button id="cancel">Ngừng đăng</button>
          </div>
        );
        break;
      case "rented":
        buttons = (
          <div className="posted-apartment-action">
            <button id="delete">Xóa</button>
          </div>
        );
        break;
      case "expired":
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
        <div className="posted-apartment-property">
          <div className="posted-apartment-main-details">
            <img
              src="https://picsum.photos/id/1/200/300"
              alt="posted-apartment"
            />
            <div className="posted-apartment-main-info posted-apartment-section">
              <span className="posted-apartment-main-info-address">
                {apartment.address}
              </span>
              <span className="posted-apartment-main-info-price">
                {apartment.price} VNĐ/Tháng
              </span>
            </div>
          </div>
          {apartment.status === "pending" ? (
            <div className="posted-apartment-statistics posted-apartment-section">
              <div className="posted-apartment-statistics-type">
                <span>Loại phòng: </span>
                <span id="statistic">{apartment.type}</span>
              </div>
            </div>
          ) : (
            <div className="posted-apartment-statistics posted-apartment-section">
              <div className="posted-apartment-statistics-view">
                <img src={View} alt="view" width={15} height={15} />
                <span>Số lượt xem: </span>
                <span id="statistic">{apartment.view}</span>
              </div>
              <div className="posted-apartment-statistics-like">
                <img src={Like} alt="view" width={15} height={15} />
                <span>Số lượt thích: </span>
                <span id="statistic">{apartment.like}</span>
              </div>
            </div>
          )}

          <div className="posted-apartment-more-detail posted-apartment-section">
            <div className="posted-apartment-more-detail-size">
              <span>Kích thước: </span>
              <span id="statistic">{apartment.size}m2</span>
            </div>
            <div className="posted-apartment-more-detail-size">
              <span>Số phòng ngủ: </span>
              <span id="statistic">{apartment.bedRoom}</span>
            </div>
            <div className="posted-apartment-more-detail-size">
              <span>Số phòng tắm: </span>
              <span id="statistic">{apartment.bathRoom}</span>
            </div>
          </div>
          <div className="posted-apartment-expiration">
            <span>Quá hạn: </span>
            <span id="statistic">{apartment.expiration}</span>
          </div>
        </div>
        {buttons}
      </div>
    );
  }
}

export default PostedApartment;