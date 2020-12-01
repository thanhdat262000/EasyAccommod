import React, { Component } from "react";
import ApartmentProperty from "./apartmentProperty";
import "../../../../css/screens/apartmentScreen/apartmentPropertiesInfo/listApartmentProperties.css";
import SendMessageButton from "../sendMessageButton";

class ListApartmentProperties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listApartmentProperties: [
        {
          property: "Thành Phố",
          property_value: "Hà Nội",
          color: "rgba(0, 0, 0, 0.15)",
        },
        {
          property: "Quận",
          property_value: "Cầu Giấy",
        },
        {
          property: "Địa chỉ",
          property_value: "Ngõ 1 Phạm Văn Đồng",
          color: "rgba(0, 0, 0, 0.15)",
        },
        {
          property: "Điều kiện căn hộ",
          property_value: "Tuyệt vời",
        },
        {
          property: "Giá thuê",
          property_value: "11.000.000 VND/tháng",
          color: "rgba(0, 0, 0, 0.15)",
        },
        { property: "Đặt cọc", property_value: "22.000.000" },
        {
          property: "Kích thước",
          property_value: "36 m2",
          color: "rgba(0, 0, 0, 0.15)",
        },
        { property: "Số phòng", property_value: "2" },
        {
          property: "Nội thất",
          property_value: "Có",
          color: "rgba(0, 0, 0, 0.15)",
        },
        { property: "Thang máy", property_value: "Có" },
        {
          property: "Phòng tắm",
          property_value: "Có",
          color: "rgba(0, 0, 0, 0.15)",
        },
      ],
    };
  }
  render() {
    const { listApartmentProperties } = this.state;
    return (
      <div className="list-apartment-properties">
        <div className="list-apartment-properties-title">
          <span>Thông tin phòng trọ</span>
        </div>
        {listApartmentProperties.map((apartmentProperty) => (
          <ApartmentProperty apartment_property={apartmentProperty} />
        ))}
        <div className="apartment-property-description">
          <b>Chi tiết</b>
          <p>
            - Diện tích 36m3 <br />- Đầy đủ nội thất và rất đẹp, chỉ cần mang đồ
            cá nhân vào ở <br />- Vị trí thuận tiện cho việc di chuyển, sân bay
            trong vòng 1km, Trung tâm q1,q3,...di chuyển tầm 10 đến 15 phút
            <br />- Sát công viên gia định rộng rãi thoáng mát có nhiều không
            khí trong lành.
            <br />- Được sử dụng MIỄN PHÍ TẤT CẢ TIỆN ÍCH như hồ bơi, gym, sân
            vườn bqq,...
            <br />- Giá thuê yêu thương cho căn hộ mới tinh như thê này 
            <br />- liên hệ em Phúc 0905728777 để hỗ trợ xem nhà và lựa chọn căn
            phù hợp
          </p>
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
