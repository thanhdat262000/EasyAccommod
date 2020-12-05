import React, { Component } from "react";
class ApartmentPostField extends Component {
  state = {};
  render() {
    const { criteria, field } = this.props.post_apartment_field;
    return (
      <div className="post-apartment-field">
        <label id="post-apartment-field-label">{criteria}</label>
        <textarea
          placeholder={field}
          name="post-apartment-field-input"
        ></textarea>
      </div>
    );
  }
}

export default ApartmentPostField;
