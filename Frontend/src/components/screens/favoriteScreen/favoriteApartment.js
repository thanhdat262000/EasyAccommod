import React, { Component } from "react";
import "../../../css/screens/favoriteApartment/favoriteApartment.css";
import Delete from "../../../image/trash.svg";

class FavoriteApartment extends Component {
  render() {
    const { image, price, address, time } = this.props.favoriteApartment;
    return (
      <div className="favorite-apartment">
        <div className="favorite-apartment-checkbox">
          <input type="checkbox"></input>
        </div>
        <div className="favorite-apartment-image">
          <img src={image} alt="img" />
        </div>
        <div className="favorite-apartment-details">
          <span className="favorite-apartment-price">{price} VNĐ/Tháng</span>
          <span className="favorite-apartment-address">{address}</span>
          <span className="favorite-apartment-time">
            Đã thích vào lúc {time}
          </span>
        </div>
        <img
          src={Delete}
          alt="delete"
          width={20}
          height={20}
          onClick={this.props.onDelete}
        />
      </div>
    );
  }
}

export default FavoriteApartment;
