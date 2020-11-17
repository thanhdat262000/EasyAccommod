import React, { Component } from "react";
import "../../css/loginDetails/inputCheckbox.css";
class InputCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { criteria } = this.props.input;
    return (
      <div className="input-checkbox">
        <div className="checkbox">
          <input type="checkbox" id="facility" name="facility" />
          <label for="facility">{criteria}</label>
        </div>
      </div>
    );
  }
}

export default InputCheckbox;
