import React, { Component } from "react";
import Body from "../home/body";
import "../../../css/mainBody.css";

class ListPostManage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <Body />
      </div>
    );
  }
}

export default ListPostManage;
