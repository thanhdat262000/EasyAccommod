import React, { Component } from "react";
import "../../../css/searchAndfilter/checkbox.css";
class SearchCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { criteria } = this.props.search;
    return (
      <div className="search-checkbox">
        <div className="criteria">{criteria}</div>
        <div className="checkbox">
          <input type="checkbox" id="facility" name="facility" />
          <label for="facility">Có nội thất</label>
        </div>
      </div>
    );
  }
}

export default SearchCheckbox;
