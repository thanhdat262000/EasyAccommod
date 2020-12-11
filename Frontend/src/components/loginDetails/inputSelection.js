import React, { Component } from "react";
import "../../css/loginDetails/inputSelection.css";
class InputSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { selections, name } = this.props.input;
    const { value, onChange, onBlur } = this.props;
    return (
      <div className="input-selection">
        <div className="selection">
          <select name={name} value={value} onChange={onChange} onBlur={onBlur}>
            {selections.map((selection, index) => (
              <option value={selection.value} key={index}>
                {selection.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default InputSelection;
