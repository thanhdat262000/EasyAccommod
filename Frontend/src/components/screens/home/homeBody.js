import React, { Component } from "react";
import Background from "./background";
import Body from "./body";
class HomeBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-body">
        <Background />
        <Body />
      </div>
    );
  }
}

export default HomeBody;
