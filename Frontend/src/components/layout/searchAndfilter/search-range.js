import React, { Component } from "react";
import "../../../css/searchAndfilter/range.css";

class SearchRange extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { criteria, unit, name } = this.props.search;
    return (
      <div className="search-range">
        <div className="criteria">
          <label for="rent-price">{criteria}</label>
        </div>
        <div className="range">
          <input
            type="text"
            name={`min-${name}`}
            id={`min-${name}`}
            placeholder="Min..."
          ></input>
          <span>-</span>
          <input
            type="text"
            name={`max-${name}`}
            id={`max-${name}`}
            placeholder="Max..."
          ></input>
          <label>{unit}</label>
        </div>
      </div>
    );
  }
}

export default SearchRange;
