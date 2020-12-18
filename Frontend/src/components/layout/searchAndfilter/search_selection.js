import React, { Component } from "react";
import "../../../css/searchAndfilter/selection.css";
class SearchSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { criteria, selections, name } = this.props.search;
    return (
      <div className="search-selection">
        <div className="criteria">
          <label for={name}>{criteria}</label>
        </div>
        <div className="selection">
          <select name={name} id={name}>
            {selections.map((selection, index) => (
              <option value={selection} key={index}>
                {selection}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default SearchSelection;
