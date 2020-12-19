import React, { Component } from "react";
import "../../../css/screens/apartmentPost/apartmentPostCheckbox.css";

class ApartmentPostCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { criteria, property } = this.props.post_apartment_checkbox;
    return (
      <div className="post-apartment-checkbox">
        <input type="checkbox" name={property} id={property}></input>
        <label for={property}>{criteria}</label>
      </div>
    );
  }
}

export default ApartmentPostCheckbox;
