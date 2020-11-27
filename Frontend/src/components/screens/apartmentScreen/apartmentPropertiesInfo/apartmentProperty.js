import React, { Component } from "react";
import "../../../../css/screens/apartmentScreen/apartmentPropertiesInfo/apartmentProperty.css";

class ApartmentProperty extends Component {
  render() {
    const { property, property_value, color } = this.props.apartment_property;
    return (
      <div className="apartment-property" style={{ backgroundColor: color }}>
        <div className="property">
          <span>{property}</span>
        </div>
        <div className="property-value">{property_value}</div>
      </div>
    );
  }
}

export default ApartmentProperty;
