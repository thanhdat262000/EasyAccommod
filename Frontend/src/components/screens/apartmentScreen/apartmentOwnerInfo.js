import React, { Component } from "react";
import Avatar from "../../../image/user.svg";
import SendMessageButton from "./sendMessageButton";
import "../../../css/screens/apartmentScreen/apartmentOwnerInfo.css";
class ApartmentOwnerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, phone } = this.props.ownerInfo;
    return (
      <div className="owner-info">
        <div className="avatar">
          <img src={Avatar} alt="avatar" width={60} height={60} />
          <div className="owner-name-number">
            <span>
              {name}, {phone}
            </span>
          </div>
        </div>

        <div className="send-message">
          <SendMessageButton />
        </div>
      </div>
    );
  }
}

export default ApartmentOwnerInfo;
