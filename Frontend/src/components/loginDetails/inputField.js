import React, { Component } from "react";
import "../../css/loginDetails/inputField.css";
class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { inputType, name } = this.props.input;
    return (
      <div className="input-field">
        <input type="text" placeholder={inputType} name={name} />
      </div>
    );
  }
}

export default InputField;
