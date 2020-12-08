import React, { Component } from "react";
import ApartmentPostField from "./apartmentPostField";
import AparmentPostSelection from "./apartmentPostSelection";
import "../../../css/screens/apartmentPost/listApartmentPostProperty.css";
import InputCheckbox from "../../loginDetails/inputCheckbox";

class ListApartmentPostProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listApartmentPostProperty: [
        {
          criteria: "Loại phòng",
          selections: ["Căn hộ", "Phòng trọ"],
          type: "selection",
          name: "roomType",
        },
        {
          criteria: "Thành phố",
          selections: ["Hà Nội", "TP HCM"],
          type: "selection",
          name: "city",
        },
        {
          criteria: "Quận",
          selections: ["Cầu Giấy", "Hai Bà Trưng"],
          type: "selection",
          name: "district",
        },
        {
          criteria: "Phường",
          selections: ["Dịch Vọng Hậu", "Mai Dịch"],
          type: "selection",
          name: "town",
        },
        {
          criteria: "Địa chỉ chi tiết",
          field: "Địa chỉ",
          type: "field",
          name: "detailAddress",
        },
        {
          criteria: "Kích thước",
          field: "20",
          unit: "m2",
          type: "field",
          name: "size",
        },
        {
          criteria: "Số phòng ngủ",
          selections: [1, 2, 3],
          type: "selection",
          name: "bedRoom",
        },
        {
          criteria: "Phòng tắm",
          selections: ["Không", "Riêng + nóng lạnh", "Riêng", "Chung"],
          type: "selection",
          name: "bathRoom",
        },
        {
          criteria: "Phòng bếp",
          selections: ["Có", "Không"],
          type: "selection",
          name: "kitchen",
        },
        {
          criteria: "Điều hòa",
          property: "air-conditioning",
          type: "checkbox",
        },
        {
          criteria: "Ban công",
          property: "terrace",
          type: "checkbox",
        },
        {
          criteria: "Điện nước",
          selections: ["Giá dân", "Giá chung"],
          type: "selection",
          name: "electric",
        },
        {
          criteria: "Đơn vị",
          selections: ["VNĐ", "USD"],
          type: "selection",
          name: "unit",
        },

        {
          criteria: "Tiền thuê",
          field: "10",
          unit: "triệu/tháng",
          type: "field",
          name: "rentPrice",
        },
        {
          criteria: "Mô tả phòng",
          field: "Mô tả",
          type: "field",
          name: "roomDescription",
        },
      ],
    };
  }
  render() {
    const { OnNext } = this.props;
    const { listApartmentPostProperty } = this.state;
    return (
      <div className="list-apartment-post-property">
        <form name="list-apartment-post-property-form">
          <div className="list-apartment-post-property-form-section">
            <div className="list-apartment-post-property-form-section-1">
              {listApartmentPostProperty.slice(0, 12).map((property, index) => {
                if (property.type === "selection")
                  return (
                    <AparmentPostSelection
                      post_apartment_selection={property}
                      key={index}
                    />
                  );
                else if (property.type === "field")
                  return (
                    <ApartmentPostField
                      post_apartment_field={property}
                      key={index}
                    />
                  );
                else return <InputCheckbox input={property} key={index} />;
              })}
            </div>
            <div className="list-apartment-post-property-form-section-2">
              {listApartmentPostProperty.slice(12).map((property, index) => {
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
            </div>
          </div>
          <button className="apartment-post-continue" onClick={OnNext}>
            Tiếp theo
          </button>
        </form>
      </div>
    );
  }
}

export default ListApartmentPostProperty;
