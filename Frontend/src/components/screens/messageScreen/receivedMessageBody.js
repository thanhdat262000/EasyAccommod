import React, { Component } from "react";
import ListSearchAndFilter from "../../layout/searchAndfilter/listSearchAndFilter";
import ListReceivedMessages from "./listReceivedMessages";
class ReceivedMessageBody extends Component {
  render() {
    return (
      <div className="received-message-main-body">
        <div className="received-message-body">
          <ListSearchAndFilter />
          <ListReceivedMessages />
        </div>
      </div>
    );
  }
}

export default ReceivedMessageBody;
