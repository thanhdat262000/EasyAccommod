import React, { Component } from "react";
import Notification from "./notification";
import "../../../css/screens/adminScreen/listNotifications.css";
class ListNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotifications: [
        {
          image: "https://picsum.photos/200/300",
          message: "Một phòng trọ đã được duyệt",
          time: "11 thg 12",
          apartment_id: 1,
        },
        {
          image: "https://picsum.photos/200/300",
          message: "Một phòng trọ đã được duyệt",
          time: "11 thg 12",
          apartment_id: 2,
        },
        {
          image: "https://picsum.photos/200/300",
          message: "Một phòng trọ đã được duyệt",
          time: "11 thg 12",
          apartment_id: 3,
        },
      ],
    };
  }
  render() {
    const { listNotifications } = this.state;
    return (
      <div className="list-notifications">
        {listNotifications.map((noti, index) => (
          <Notification key={index} noti={noti} />
        ))}
      </div>
    );
  }
}

export default ListNotifications;
