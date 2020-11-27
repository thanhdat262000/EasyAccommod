import React, { Component } from "react";
import ListApartments from "../../layout/listApartments/listApartments";
import ListSearchAndFilter from "../../layout/searchAndfilter/listSearchAndFilter";
import "../../../css/body.css";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main">
        <ListSearchAndFilter />
        <ListApartments />
      </div>
    );
  }
}

export default Body;
