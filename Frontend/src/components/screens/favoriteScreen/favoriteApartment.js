import React, { Component } from "react";
import "../../../css/screens/favoriteApartment/favoriteApartment.css";
import Delete from "../../../image/trash.svg";

class FavoriteApartment extends Component {
  render() {
    const {
      image_url,
      price,
      addressDescription,
      apartment_id,
    } = this.props.favoriteApartment;
    return (
      <div className="favorite-apartment">
        <a href={`/apartment/${apartment_id}`}>
          <div className="favorite-apartment-checkbox">
            <input type="checkbox"></input>
          </div>
          <div className="favorite-apartment-image">
            <img src={image_url} alt="img" />
          </div>
          <div className="favorite-apartment-details">
            <span className="favorite-apartment-price">{price} VNĐ/Tháng</span>
            <span className="favorite-apartment-address">
              {addressDescription}
            </span>
            <span className="favorite-apartment-time">
              Đã thích vào lúc 11 thg 12 2020
            </span>
          </div>
          <img
            src={Delete}
            alt="delete"
            width={20}
            height={20}
            onClick={this.props.onDelete}
          />
        </a>
      </div>
    );
  }
}

export default FavoriteApartment;
