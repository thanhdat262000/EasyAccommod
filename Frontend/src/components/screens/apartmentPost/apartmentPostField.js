import React, { Component } from "react";
import "../../../css/screens/apartmentPost/apartmentPostField.css";

class ApartmentPostField extends Component {
  state = {};
  render() {
    const { criteria, field, unit, name } = this.props.post_apartment_field;
    return (
      <div className="post-apartment-field">
        <label id="post-apartment-field-label">{criteria}</label>
        <div>
          {" "}
          <div>
            {" "}
            <textarea placeholder={field} name={`${name}`}></textarea>
            <span id="unit">{unit}</span>
          </div>
          <span id={`${name}-alert`}></span>
        </div>
      </div>
    );
  }
}

export default ApartmentPostField;
