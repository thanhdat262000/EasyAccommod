import React, { Component } from "react";
class AparmentPostSelection extends Component {
  state = {};
  render() {
    const { criteria, selections } = this.props.post_apartment_selection;
    return (
      <div className="post-apartment-selection">
        <label id="post-apartment-selection-label">{criteria}</label>
        <select name="post-apartment-select">
          {selections.map((selection, index) => (
            <option value={selection.name}>{selection.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default AparmentPostSelection;
