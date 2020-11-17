import React, { Component } from "react";
import "../../../css/searchAndfilter/selection.css";
class SearchSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { criteria, selections } = this.props.search;
    return (
      <div className="search-selection">
        <div className="criteria">
          <label for="room-type">{criteria}</label>
        </div>
        <div className="selection">
          <select name="selection" id="roomtype">
            {selections.map((selection) => (
              <option value={selection.name} key={selection.id}>
                {selection.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default SearchSelection;
