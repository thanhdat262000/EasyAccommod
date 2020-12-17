import React, { Component } from "react";
import ListSearchAndFilter from "../../layout/searchAndfilter/listSearchAndFilter";
import ListFavoriteApartments from "./listFavoriteApartments";
import "../../../css/screens/favoriteApartment/favoriteApartmentBody.css";
import { getAllFavorite } from "../../../service/user.service";

class FavoriteApartmentBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listFavorites: [],
    };
  }
  componentDidMount() {
    getAllFavorite().then((data) => {
      console.log(data);
      this.setState({
        listFavorites: data,
      });
    });
  }
  render() {
    const { listFavorites } = this.state;
    return (
      <div className="favorite-apartment-main-body">
        <div className="favorite-apartment-body">
          <ListSearchAndFilter />
          <ListFavoriteApartments ListFavoriteApartments={listFavorites} />
        </div>
      </div>
    );
  }
}

export default FavoriteApartmentBody;
