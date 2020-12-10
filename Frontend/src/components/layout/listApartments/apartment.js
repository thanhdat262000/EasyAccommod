import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../../css/apartment.css";
import apartment from "../../../image/apartment.jpg";
class Apartment extends Component {
  render() {
    const apartmentProps = this.props.apartmentInfo;
    const { id } = this.props.apartmentInfo;
    console.log(apartment);
    return (
      // <Link to="/apartment" >
      <div
        className="apartment"
        style={{
          backgroundImage: "url(" + apartmentProps.imagePath + ")",
        }}
      >
        <a href={`/apartment/${id}`} className="main-apartment">
          <div className="apartment-info">
            <div className="apartment-price">
              <label>{apartmentProps.rentPrice}</label>
              <span>VNĐ/Tháng</span>
            </div>
            <div className="apartment-address">
              <span>{apartmentProps.address}</span>
            </div>
          </div>
        </a>
      </div>
      // </Link>
    );
  }
}

export default Apartment;
