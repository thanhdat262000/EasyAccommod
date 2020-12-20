import React, { Component } from "react";
import ApartmentPostField from "./apartmentPostField";
import AparmentPostSelection from "./apartmentPostSelection";
import "../../../css/screens/apartmentPost/listApartmentPostProperty.css";
import ApartmentMap from "../apartmentScreen/apartmentMap";
import ApartmentPostCheckbox from "./apartmentPostCheckbox";
import * as Yup from "yup";
import { withFormik } from "formik";

class ListApartmentPostProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listApartmentPostProperty: [
        {
          criteria: "Loại phòng",
          selections: ["Căn hộ mini", "Căn hộ đầy đủ", "Phòng trọ", "Nhà dân"],
          type: "selection",
          name: "apartment_type",
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
          name: "addressDescription",
        },
        {
          criteria: "Kích thước",
          field: "20",
          unit: "m2",
          type: "field",
          name: "square",
        },
        {
          criteria: "Phòng tắm",
          selections: [
            "Có nóng lạnh, khép kín",
            "Không có nóng lạnh, khép kín",
            "Có nóng lạnh, không khép kín",
            "Không có nóng lạnh, không khép kín",
          ],
          type: "selection",
          name: "bathroom_type",
        },
        {
          criteria: "Phòng bếp",
          selections: ["Không nấu ăn", "Khu bếp chung", "Khu bếp riêng"],
          type: "selection",
          name: "kitchen_type",
        },
        {
          criteria: "Điều hòa",
          property: "hasAirConditioning",
          type: "checkbox",
        },
        {
          criteria: "Ban công",
          property: "hasTerrace",
          type: "checkbox",
        },

        {
          criteria: "Điện nước",
          selections: ["Giá dân", "Giá thuê"],
          type: "selection",
          name: "waterAndElecticity_bill_type",
        },
        {
          criteria: "Hút thuốc",
          property: "smoker",
          type: "checkbox",
        },
        {
          criteria: "Thang máy",
          property: "hasElevator",
          type: "checkbox",
        },
        {
          criteria: "Tiền thuê",
          field: "10",
          unit: "VNĐ/tháng",
          type: "field",
          name: "price",
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
    const { listApartmentPostProperty } = this.state;
    return (
      <div className="list-apartment-post-property">
        <div className="list-apartment-post-property-form-section">
          <div className="list-apartment-post-property-form-section-1">
            {listApartmentPostProperty.slice(0, 11).map((property, index) => {
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
              else
                return (
                  <ApartmentPostCheckbox
                    post_apartment_checkbox={property}
                    key={index}
                  />
                );
            })}
          </div>
          <div className="list-apartment-post-property-form-section-2">
            <ApartmentMap width="100%" paddingTop="60%" marginTop="1rem" />
            {listApartmentPostProperty.slice(11).map((property, index) => {
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
              else
                return (
                  <ApartmentPostCheckbox
                    post_apartment_checkbox={property}
                    key={index}
                  />
                );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ListApartmentPostProperty;
