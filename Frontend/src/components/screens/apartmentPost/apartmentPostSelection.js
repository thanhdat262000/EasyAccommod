import React, { Component } from "react";
import "../../../css/screens/apartmentPost/apartmentPostSelection.css";

class AparmentPostSelection extends Component {
  state = {};
  render() {
    const { criteria, selections, name } = this.props.post_apartment_selection;
    return (
      <div className="post-apartment-selection">
        <label id="post-apartment-selection-label">{criteria}</label>
        <select name={`post-apartment-select-${name}`}>
          {selections.map((selection, index) => (
            <option value={selection.name} key={index}>
              {selection}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default AparmentPostSelection;
