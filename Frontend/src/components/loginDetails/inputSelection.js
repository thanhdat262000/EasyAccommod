import React, { Component } from "react";
import "../../css/loginDetails/inputSelection.css";
class InputSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { selections } = this.props.input;
    return (
      <div className="input-selection">
        <div className="selection">
          <select name="selection">
            {selections.map((selection) => (
              <option value={selection} key={selection.id}>
                {selection}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default InputSelection;
