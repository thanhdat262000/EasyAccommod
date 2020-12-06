import React, { Component } from "react";
import "../../../css/screens/apartmentPost/apartmentPostField.css";

class ApartmentPostField extends Component {
  state = {};
  render() {
    const { criteria, field, unit } = this.props.post_apartment_field;
    return (
      <div className="post-apartment-field">
        <label id="post-apartment-field-label">{criteria}</label>
        <textarea
          placeholder={field}
          name="post-apartment-field-input"
        ></textarea>
        <span id="unit">{unit}</span>
      </div>
    );
  }
}

export default ApartmentPostField;
