import React, { Component } from "react";
import "../../../css/screens/apartmentScreen/apartmentFavoriteButton.css";
import { ReactComponent as Favorite } from "../../../image/passion.svg";
import { favorite } from "../../../service/user.service";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

class ApartmentFavoriteButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isFavorite: false };
  }
  handleClick = (e) => {
    const { params } = this.props;
    favorite(params).then((data) => {
      this.setState({
        isFavorite: data.isFavorite,
      });
    });
  };
  componentDidMount() {
    const { params } = this.props;
    favorite(params).then((data) => {
      this.setState({
        isFavorite: data.isFavorite,
      });
    });
  }
  render() {
    const { isFavorite } = this.state;
    return (
      <div className="apartment-favorite-button">
        <button onClick={this.handleClick}>
          <span id="favorite">{isFavorite ? "Bỏ thích" : "Yêu thích"}</span>
          <Favorite
            fill="red"
            width="15px"
            height="15px"
            fill-opacity={isFavorite ? "1" : "0"}
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
