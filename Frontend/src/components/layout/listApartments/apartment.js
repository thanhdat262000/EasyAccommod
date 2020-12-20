import React, { Component } from "react";
import "../../../css/apartment.css";
class Apartment extends Component {
  render() {
    const apartmentProps = this.props.apartmentInfo;
    const { apartment_id } = this.props.apartmentInfo;
    return (
      // <Link to="/apartment" >
      <div
        className="apartment"
        style={{
          backgroundImage: "url(" + apartmentProps.imagePath + ")",
        }}
      >
        <a href={`/apartment/${apartment_id}`} className="main-apartment">
          <div className="apartment-info">
            <div className="apartment-price">
              <label>{apartmentProps.price}</label>
              <span>VNĐ/Tháng</span>
            </div>
            <div className="apartment-address">
              <span>{apartmentProps.city}</span>
              <span>{apartmentProps.district}</span>
            </div>
          </div>
        </a>
      </div>
      // </Link>
    );
  }
}

export default Apartment;
