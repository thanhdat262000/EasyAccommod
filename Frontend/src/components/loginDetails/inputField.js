import React, { Component } from "react";
import "../../css/loginDetails/inputField.css";
class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { inputType } = this.props.input;
    return (
      <div className="input-field">
        <input type="text" placeholder={inputType} value="" />
      </div>
    );
  }
}

export default InputField;
