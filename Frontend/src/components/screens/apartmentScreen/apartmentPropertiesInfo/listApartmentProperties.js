import React, { Component } from "react";
import ApartmentProperty from "./apartmentProperty";
import "../../../../css/screens/apartmentScreen/apartmentPropertiesInfo/listApartmentProperties.css";
import SendMessageButton from "../sendMessageButton";

class ListApartmentProperties extends Component {
  render() {
    const {
      city,
      district,
      addressDescription,
      price,
      square,
      hasElevator,
      bathroom_type,
      hasAirConditioning,
      detailDescription,
      favorite,
      view,
    } = this.props.info;
    const listApartmentProperties = [
      {
        property: "Thành Phố",
        property_value: city,
        color: "rgba(0, 0, 0, 0.15)",
      },
      {
        property: "Quận",
        property_value: district,
      },
      {
        property: "Địa chỉ",
        property_value: addressDescription,
        color: "rgba(0, 0, 0, 0.15)",
      },
      {
        property: "Điều kiện căn hộ",
        property_value: "Tuyệt vời",
      },
      {
        property: "Giá thuê",
        property_value: `${price} VNĐ/tháng`,
        color: "rgba(0, 0, 0, 0.15)",
      },
      { property: "Đặt cọc", property_value: price * 3 },
      {
        property: "Kích thước",
        property_value: `${square} m2`,
        color: "rgba(0, 0, 0, 0.15)",
      },
      {
        property: "Điều hòa",
        property_value: hasAirConditioning === 1 ? "Có" : "Không",
      },
      {
        property: "Nội thất",
        property_value: "Có",
        color: "rgba(0, 0, 0, 0.15)",
      },
      {
        property: "Thang máy",
        property_value: hasElevator === 1 ? "Có" : "Không",
      },
      {
        property: "Phòng tắm",
        property_value: bathroom_type,
        color: "rgba(0, 0, 0, 0.15)",
      },
      {
        property: "Lượt thích",
        property_value: favorite,
      },
      {
        property: "Lượt xem",
        property_value: view,
        color: "rgba(0, 0, 0, 0.15)",
      },
    ];
    return (
      <div className="list-apartment-properties">
        <div className="list-apartment-properties-title">
          <span>Thông tin phòng trọ</span>
        </div>
        {listApartmentProperties.map((apartmentProperty, index) => (
          <ApartmentProperty
            apartment_property={apartmentProperty}
            key={index}
          />
        ))}
        <div className="apartment-property-description">
          <b>Chi tiết</b>
          <p>{detailDescription}</p>
        </div>
        <form name="contact-form" method="post">
          <div className="contact-owner">
            <span>Liên hệ quảng cáo</span>
            <div className="contact-owner-text">
              <span>Văn bản</span>
              <textarea
                type="text"
                name="detail"
                placeholder="Nhập văn bản"
              ></textarea>
            </div>
            <div className="contact-owner-number">
              <span>Số điện thoại</span>
              <div className="contact-owner-number-inputField">
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  name="number"
                ></input>
                <div className="contact-owner-number-checkbox">
                  <input type="checkbox" id="call-later" name="call-later" />
                  <label for="call-later">Hãy gọi lại cho tôi</label>
                </div>
                <div className="contact-owner-number-checkbox">
                  <input type="checkbox" id="want-review" name="want-review" />
                  <label for="want-review">Tôi muốn xem căn hộ</label>
                </div>
              </div>
            </div>
            <div className="contact-owner-submit">
              {" "}
              <SendMessageButton />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ListApartmentProperties;
