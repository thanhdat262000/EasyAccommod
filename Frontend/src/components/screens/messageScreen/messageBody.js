import React, { Component } from "react";
import ListSearchAndFilter from "../../layout/searchAndfilter/listSearchAndFilter";
import ListReceivedMessages from "./listReceivedMessages";
import "../../../css/screens/messageScreen/messageBody.css";
import ListSentMessages from "./listSentMessages";

class MessageBody extends Component {
  render() {
    return (
      <div className="message-main-body">
        <div className="message-body">
          <ListSearchAndFilter />
          {/* <ListReceivedMessages /> */}
          <ListSentMessages />
        </div>
      </div>
    );
  }
}

export default MessageBody;
