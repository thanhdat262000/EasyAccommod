import React, { Component } from "react";
import "../../css/loginDetails/inputField.css";
class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { inputType, name, type } = this.props.input;
    const { value, onChange, onBlur, touched, error } = this.props;
    return (
      <div className="input-field">
        <input
          type={type}
          placeholder={inputType}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {touched && <span className={`${name}-alert alert`}>{error}</span>}
      </div>
    );
  }
}

export default InputField;
