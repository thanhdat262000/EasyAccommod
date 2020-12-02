import React, { Component } from "react";
import Delete from "../../../image/trash.svg";
import "../../../css/screens/messageScreen/sentMessage.css";

class SentMessage extends Component {
  render() {
    const { receiverAvatar, receiverName, content, time } = this.props.message;
    return (
      <div className="sent-message">
        <input type="checkbox"></input>
        <div className="sent-message-receiver">
          <span id="to">Tới:</span>
          <img src={receiverAvatar} alt="avatar" width={25} height={25} />
          <span className="sent-message-receiver-name">{receiverName}</span>
        </div>
        <div className="sent-message-details">
          <span className="sent-message-text">{content}</span>
          <span classname="sent-message-time">{time}</span>
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

export default SentMessage;
