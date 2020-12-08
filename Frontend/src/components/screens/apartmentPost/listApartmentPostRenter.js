import React, { Component } from "react";
import ApartmentPostField from "./apartmentPostField";
import AparmentPostSelection from "./apartmentPostSelection";
import "../../../css/screens/apartmentPost/listApartmentPostRenter.css";
import InputCheckbox from "../../loginDetails/inputCheckbox";

class ListApartmentPostRenter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listApartmentPostRenter: [
        {
          criteria: "Độ tuổi",
          selections: ["Sinh viên", "Người đã đi làm"],
          type: "selection",
          name: "age",
        },
        {
          criteria: "Số người",
          selections: [1, 2, 3, 4, 5],
          type: "selection",
          name: "people",
        },
        {
          criteria: "Giới tính",
          selections: ["Nam", "Nữ"],
          type: "selection",
          name: "gender",
        },

        {
          criteria: "Hút thuốc",
          property: "smoke",
          type: "checkbox",
        },
      ],
    };
  }
  render() {
    const { listApartmentPostRenter } = this.state;
    const { OnNext } = this.props;
    return (
      <div className="list-apartment-post-renter">
        <form name="list-apartment-post-renter-form" action="POST">
          <div className="list-apartment-post-renter-form-section">
            {listApartmentPostRenter.map((property, index) => {
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
          <button className="apartment-post-continue" onClick={OnNext}>
            Tiếp theo
          </button>
        </form>
      </div>
    );
  }
}

export default ListApartmentPostRenter;
