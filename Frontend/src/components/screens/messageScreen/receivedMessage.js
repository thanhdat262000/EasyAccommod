import React, { Component } from "react";
import Delete from "../../../image/trash.svg";
import "../../../css/screens/messageScreen/receivedMessage.css";

class ReceivedMessage extends Component {
  render() {
    const { senderAvatar, senderName, content, time } = this.props.message;
    return (
      <div className="received-message">
        <input type="checkbox"></input>
        <div className="received-message-sender">
          <img src={senderAvatar} alt="avatar" width={25} height={25} />
          <span className="received-message-sender-name">{senderName}</span>
        </div>
        <div className="received-message-details">
          <span className="received-message-text">{content}</span>
          <span classname="received-message-time">{time}</span>
        </div>
        <img
          src={Delete}
          alt="delete"
          width={25}
          height={25}
          onClick={this.props.onDelete}
        />
      </div>
    );
  }
}

export default ReceivedMessage;
