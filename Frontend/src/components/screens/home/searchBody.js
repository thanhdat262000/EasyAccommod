import React, { Component } from "react";
import Body from "./body";
import "../../../css/mainBody.css";

class SearchBody extends Component {
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

export default SearchBody;
