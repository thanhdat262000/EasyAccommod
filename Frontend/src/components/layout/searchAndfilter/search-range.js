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
            name={`${name}_min`}
            id={`${name}_min`}
            placeholder="Min..."
          ></input>
          <span>-</span>
          <input
            type="text"
            name={`${name}_max`}
            id={`${name}_max`}
            placeholder="Max..."
          ></input>
          <label>{unit}</label>
        </div>
      </div>
    );
  }
}

export default SearchRange;
