import React, { Component } from "react";
import ListApartments from "../../layout/listApartments/listApartments";
import ListSearchAndFilter from "../../layout/searchAndfilter/listSearchAndFilter";
import "../../../css/body.css";
import { getAllApartments, search } from "../../../service/user.service";
class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listApartments: [],
    };
  }
  componentDidMount() {
    getAllApartments().then((data) => {
      this.setState({
        listApartments: data,
      });
    });
  }
  onSearch = (query) => {
    search(query).then((data) => {
      console.log(data);
      this.setState({
        listApartments: data,
      });
    });
  };
  render() {
    const { listApartments } = this.state;
    return (
      <div className="main">
        <ListSearchAndFilter onSearch={this.onSearch} />
        <ListApartments listApartments={listApartments} />
      </div>
    );
  }
}

export default Body;
