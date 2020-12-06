import React, { Component } from "react";
import ApartmentPostField from "./apartmentPostField";
import AparmentPostSelection from "./apartmentPostSelection";
class ListApartmentPostProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listApartmentPostProperty: [
        {
          criteria: "Loại phòng",
          selections: ["Căn hộ", "Phòng trọ"],
          type: "selection",
        },
        {
          criteria: "Thành phố",
          selections: ["Hà Nội", "TP HCM"],
          type: "selection",
        },
        {
          criteria: "Quận",
          selections: ["Cầu Giấy", "Hai Bà Trưng"],
          type: "selection",
        },
        {
          criteria: "Phường",
          selections: ["Dịch Vọng Hậu", "Mai Dịch"],
          type: "selection",
        },
        {
          criteria: "Số phòng ngủ",
          selections: [1, 2, 3],
          type: "selection",
        },
        {
          criteria: "Phòng tắm",
          selections: ["Không", "Riêng + nóng lạnh", "Riêng", "Chung"],
          type: "selection",
        },
        {
          criteria: "Phòng bếp",
          selections: ["Có", "Không"],
          type: "selection",
        },
        {
          criteria: "Điện nước",
          selections: ["Giá dân", "Giá chung"],
          type: "selection",
        },
        {
          criteria: "Đơn vị",
          selections: ["VNĐ", "USD"],
          type: "selection",
        },
        { criteria: "Địa chỉ chi tiết", field: "Địa chỉ", type: "field" },
        { criteria: "Kích thước", field: "20", unit: "m2", type: "field" },
        {
          criteria: "Tiền thuê",
          field: "10",
          unit: "triệu/tháng",
          type: "field",
        },
        { criteria: "Mô tả phòng", field: "Mô tả", type: "field" },
      ],
    };
  }
  render() {
    const { listApartmentPostProperty } = this.state;
    return (
      <div className="list-apartment-post-property">
        <form name="list-apartment-post-property-form" action="POST">
          {listApartmentPostProperty.map((property, index) => {
            if (property.type === "selection")
              return (
                <AparmentPostSelection
                  post_apartment_selection={property}
                  key={index}
                />
              );
            else
              return (
                <ApartmentPostField
                  post_apartment_field={property}
                  key={index}
                />
              );
          })}
        </form>
      </div>
    );
  }
}

export default ListApartmentPostProperty;
