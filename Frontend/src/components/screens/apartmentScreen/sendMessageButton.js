import React, { Component } from "react";
import Send from "../../../image/send.svg";
import "../../../css/screens/apartmentScreen/sendMessageButton.css";
class SendMessageButton extends Component {
  render() {
    return (
      <button id="send-message-button">
        <img src={Send} alt="send" width={30} height={30} />
        <span>GỬI TIN NHẮN</span>
      </button>
    );
  }
}

export default SendMessageButton;
