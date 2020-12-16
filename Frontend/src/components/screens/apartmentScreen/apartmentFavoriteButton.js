import React, { Component } from "react";
import "../../../css/screens/apartmentScreen/apartmentFavoriteButton.css";
import { ReactComponent as Favorite } from "../../../image/passion.svg";

class ApartmentFavoriteButton extends Component {
  handleClick = (e) => {
    this.props.onClick();
  };
  render() {
    const { isFavorite } = this.props;
    return (
      <div className="apartment-favorite-button">
        <button onClick={this.handleClick}>
          <span id="favorite">
            {isFavorite === 1 ? "Bỏ thích" : "Yêu thích"}
          </span>
          <Favorite
            fill="red"
            width="15px"
            height="15px"
            fill-opacity={isFavorite === 1 ? "1" : "0"}
            stroke="black"
            strokeOpacity="1"
            strokeWidth="30px"
          />
        </button>
      </div>
    );
  }
}

export default ApartmentFavoriteButton;
