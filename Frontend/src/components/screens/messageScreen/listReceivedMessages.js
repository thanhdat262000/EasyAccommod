import React, { Component } from "react";
import ReceivedMessage from "./receivedMessage";
import "../../../css/screens/messageScreen/listReceivedMessages.css";
import Avatar from "../../../image/user.svg";

class ListReceivedMessages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listReceivedMessages: [
        {
          senderAvatar: Avatar,
          senderName: "Thanh D",
          content:
            "Xin chào, tôi là Nguyễn Thành Đạt, tôi muốn được xem căn nhà của bạn",
          time: "11 thg 11",
        },
        {
          senderAvatar: Avatar,
          senderName: "To Huyen",
          content: "Lorem Ipsum is simply dummy text of the prit",
          time: "11 thg 11",
        },
        {
          senderAvatar: Avatar,
          senderName: "John",
          content: "Lorem Ipsum is simply dummy text of the prit",
          time: "11 thg 11",
        },
        {
          senderAvatar: Avatar,
          senderName: "Harry",
          content: "Lorem Ipsum is simply dummy text of the prit",
          time: "11 thg 11",
        },
        {
          senderAvatar: Avatar,
          senderName: "Thanh D",
          content: "Lorem Ipsum is simply dummy text of the prit",
          time: "11 thg 11",
        },
      ],
    };
  }
  onDelete(item) {
    return () => {
      const index = this.state.listReceivedMessages.indexOf(item);
      this.setState({
        listReceivedMessages: [
          ...this.state.listReceivedMessages.slice(0, index),
          ...this.state.listReceivedMessages.slice(index + 1),
        ],
      });
    };
  }
  render() {
    const { listReceivedMessages } = this.state;
    return (
      <div className="list-received-messages">
        {listReceivedMessages.map((message, index) => (
          <ReceivedMessage
            key={index}
            message={message}
            onDelete={this.onDelete(message)}
          />
        ))}
      </div>
    );
  }
}

export default ListReceivedMessages;
