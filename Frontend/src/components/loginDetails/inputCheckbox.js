import React, { Component } from "react";
import "../../css/loginDetails/inputCheckbox.css";
class InputCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { criteria, property } = this.props.input;
    const { value, onChange, onBlur } = this.props;
    return (
      <div className="input-checkbox">
        <div className="checkbox">
          <input
            type="checkbox"
            id={property}
            name={property}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label for={property}>{criteria}</label>
        </div>
      </div>
    );
  }
}

export default InputCheckbox;
