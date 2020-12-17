import React, { Component } from "react";
import FavoriteApartment from "./favoriteApartment";
import "../../../css/screens/favoriteApartment/listFavoriteApartments.css";

class ListFavoriteApartments extends Component {
  constructor(props) {
    super(props);
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete(item) {
    return () => {
      const index = this.state.ListFavoriteApartments.indexOf(item);
      this.setState({
        ListFavoriteApartments: [
          ...this.state.ListFavoriteApartments.slice(0, index),
          ...this.state.ListFavoriteApartments.slice(index + 1),
        ],
      });
    };
  }
  render() {
    const { ListFavoriteApartments } = this.props;
    return (
      <div className="list-favorite-apartments">
        <div className="list-favorite-apartment-title">
          <span>Danh sách yêu thích</span>
        </div>
        {ListFavoriteApartments.map((favoriteApartment, index) => (
          <FavoriteApartment
            key={index}
            favoriteApartment={favoriteApartment}
            onDelete={this.onDelete(favoriteApartment)}
          />
        ))}
      </div>
    );
  }
}

export default ListFavoriteApartments;
