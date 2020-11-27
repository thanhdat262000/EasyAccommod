import React, { Component } from "react";
import Avatar from "../../../image/user.svg";
import SendMessageButton from "./sendMessageButton";
import "../../../css/screens/apartmentScreen/apartmentInfo.css";
class ApartmentInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="owner-info">
        <div className="avatar">
          <img src={Avatar} alt="avatar" width={60} height={60} />
          <div className="owner-name-number">
            <span>Thành Đạt, 0966998657</span>
          </div>
        </div>

        <div className="send-message">
          <SendMessageButton />
        </div>
      </div>
    );
  }
}

export default ApartmentInfo;
