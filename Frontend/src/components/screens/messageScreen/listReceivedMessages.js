import React, { Component } from "react";
import ReceivedMessage from "./receivedMessage";
import "../../../css/screens/messageScreen/listReceivedMessages.css";

class ListReceivedMessages extends Component {
  render() {
    return (
      <div className="list-received-messages">
        <ReceivedMessage />
        <ReceivedMessage />
        <ReceivedMessage />
        <ReceivedMessage />
        <ReceivedMessage />
        <ReceivedMessage />
      </div>
    );
  }
}

export default ListReceivedMessages;
