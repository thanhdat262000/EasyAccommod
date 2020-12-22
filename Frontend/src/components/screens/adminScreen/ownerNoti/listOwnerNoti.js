import React, { Component } from "react";
import NotiComponent from "./notiComponent";
import "../../../../css/screens/adminScreen/ownerNoti/listOwnerNoti.css";
class ListOwnerNoti extends Component {
  render() {
    const { listApartments } = this.props;
    return (
      <div className="list-noti">
        {listApartments.map((apartment, index) => (
          <NotiComponent apartmentInfo={apartment} key={index} />
        ))}
      </div>
    );
  }
}

export default ListOwnerNoti;
