import React, { Component } from "react";
import "../../../css/screens/messageScreen/listSentMessages.css";
import Avatar from "../../../image/user.svg";
import SentMessage from "../messageScreen/sentMessage";

class ListAccManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSentMessages: [
        {
          receiverAvatar: Avatar,
          receiverName: "Thanh D",
          content:
            "Xin chào, tôi là Nguyễn Thành Đạt, tôi muốn được xem căn nhà của bạn",
          time: "11 thg 11",
        },
        {
          receiverAvatar: Avatar,
          receiverName: "To Huyen",
          content: "Lorem Ipsum is simply dummy text of the prit",
          time: "11 thg 11",
        },
        {
          receiverAvatar: Avatar,
          receiverName: "John",
          content: "Lorem Ipsum is simply dummy text of the prit",
          time: "11 thg 11",
        },
        {
          receiverAvatar: Avatar,
          receiverName: "Harry",
          content: "Lorem Ipsum is simply dummy text of the prit",
          time: "11 thg 11",
        },
        {
          receiverAvatar: Avatar,
          receiverName: "Thanh D",
          content: "Lorem Ipsum is simply dummy text of the prit",
          time: "11 thg 11",
        },
      ],
    };
  }
  onDelete(item) {
    return () => {
      const index = this.state.listSentMessages.indexOf(item);
      this.setState({
        listSentMessages: [
          ...this.state.listSentMessages.slice(0, index),
          ...this.state.listSentMessages.slice(index + 1),
        ],
      });
    };
  }
  render() {
    const { listSentMessages } = this.state;
    return (
      <div className="list-sent-messages">
        {listSentMessages.map((message, index) => (
          <SentMessage
            key={index}
            message={message}
            onDelete={this.onDelete(message)}
          />
        ))}
      </div>
    );
  }
}

export default ListAccManage;
