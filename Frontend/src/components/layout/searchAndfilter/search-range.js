import React, { Component } from "react";
import "../../../css/range.css";

class SearchRange extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { criteria, unit } = this.props.search;
    return (
      <div className="search-range">
        <div className="criteria">
          <label for="rent-price">{criteria}</label>
        </div>
        <div className="range">
          <input
            type="text"
            name="rent-price"
            id="min"
            placeholder="Min..."
          ></input>
          <span>-</span>
          <input
            type="text"
            name="rent-price"
            id="max"
            placeholder="Max..."
          ></input>
          <label>{unit}</label>
        </div>
      </div>
    );
  }
}

export default SearchRange;
