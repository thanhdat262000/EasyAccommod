import React, { Component } from "react";

class AccountInfo extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      email: "",
    };
  }

  onChange = (e) => {
    /*
      Because we named the inputs to match their
      corresponding values in state, it's
      super easy to update the state
    */
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { fname, lname, email } = this.state;
    return (
      <form>
        <input
          type="text"
          name="fname"
          value={fname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lname"
          value={lname}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={this.onChange}
        />
      </form>
    );
  }
}

export default AccountInfo;
