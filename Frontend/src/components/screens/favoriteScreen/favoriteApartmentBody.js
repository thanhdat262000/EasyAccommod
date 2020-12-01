import React, { Component } from "react";
import ListSearchAndFilter from "../../layout/searchAndfilter/listSearchAndFilter";
import ListFavoriteApartments from "./listFavoriteApartments";
import "../../../css/screens/favoriteApartment/favoriteApartmentBody.css";

class FavoriteApartmentBody extends Component {
  render() {
    return (
      <div className="favorite-apartment-main-body">
        <div className="favorite-apartment-body">
          <ListSearchAndFilter />
          <ListFavoriteApartments />
        </div>
      </div>
    );
  }
}

export default FavoriteApartmentBody;
