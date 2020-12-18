import React, { Component } from "react";
import Apartment from "./apartment";
import "../../../css/listApartments.css";
class ListApartments extends Component {
  render() {
    const { listApartments } = this.props;
    return (
      <div className="list-apartments">
        {listApartments.map((apartment, index) => (
          <Apartment apartmentInfo={apartment} key={index} />
        ))}
      </div>
    );
  }
}

export default ListApartments;
