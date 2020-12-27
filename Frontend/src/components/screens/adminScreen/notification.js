import React, { Component } from "react";
import Cancel from "../../../image/cancel.svg";
import "../../../css/screens/adminScreen/notification.css";
class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { detailDescription, apartment_id, time } = this.props.noti;
    return (
      <a href={`/apartment/${apartment_id}`} className="notification-link">
        <div className="notification">
          <div className="notification-image">
            <img src="https://picsum.photos/200/300" alt="noti" />
          </div>
          <div className="notification-message">
            <span id="message">{detailDescription}</span>
            <span id="time">{time}</span>
          </div>
          <img src={Cancel} alt="cancel" width={13} height={13} />
        </div>
      </a>
    );
  }
}

export default Notification;
