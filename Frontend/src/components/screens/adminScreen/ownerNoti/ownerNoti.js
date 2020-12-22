import React, { Component } from "react";
import ListOwnerNoti from "./listOwnerNoti";
import "../../../../css/screens/adminScreen/ownerNoti/ownerNoti.css";
import { getAllApartments, search } from "../../../../service/user.service";
class OwnerNoti extends Component {
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
      <div className="main-noti">
        <ListOwnerNoti listApartments={listApartments} />
      </div>
    );
  }
}

export default OwnerNoti;
