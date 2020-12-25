import React, { Component } from "react";
import Cancel from "../../../image/cancel.svg";
import "../../../css/screens/adminScreen/notification.css";
class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { image, message, time, apartment_id } = this.props.noti;
    return (
      <a href={`/apartment/${apartment_id}`} className="notification-link">
        <div className="notification">
          <div className="notification-image">
            <img src={image} alt="noti" />
          </div>
          <div className="notification-message">
            <span id="message">{message}</span>
            <span id="time">{time}</span>
          </div>
          <img src={Cancel} alt="cancel" width={13} height={13} />
        </div>
      </a>
    );
  }
}

export default Notification;
