import React, { Component } from "react";
import Avatar from "../../../image/user.svg";
import Delete from "../../../image/trash.svg";
import "../../../css/screens/messageScreen/receivedMessage.css";

class ReceivedMessage extends Component {
  render() {
    return (
      <div className="received-message">
        <input type="checkbox"></input>
        <div className="received-message-sender">
          <img src={Avatar} alt="avatar" width={25} height={25} />
          <span className="received-message-sender-name">Thanh D</span>
        </div>
        <div className="received-message-details">
          <span className="received-message-text">
            Lorem Ipsum is simply dummy text of the prit...
          </span>
          <span classname="received-message-time"></span>
        </div>
        <img src={Delete} alt="delete" width={25} height={25} />
      </div>
    );
  }
}

export default ReceivedMessage;
