import React, { Component } from "react";
import ApartmentProperty from "./apartmentProperty";
import "../../../../css/screens/apartmentScreen/apartmentPropertiesInfo/listApartmentProperties.css";

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
      </div>
    );
  }
}

export default ListApartmentProperties;
