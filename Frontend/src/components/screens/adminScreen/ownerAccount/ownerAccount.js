import React, { Component } from "react";
import "../../../../css/screens/adminScreen/ownerAccount/ownerAccount.css";
import { approveOwner } from "../../../../service/admin.service";
class OwnerAccount extends Component {
  button = () => {
    const { status, account_id } = this.props.account;
    if (status === "Đã duyệt")
      return (
        <div className="owner-account-buttons">
          <button className="view">Xem</button>
        </div>
      );
    else
      return (
        <div className="owner-account-buttons">
          <button
            className="approved"
            onClick={() => {
              this.props.onClick(account_id);
            }}
          >
            Duyệt
          </button>
          <button className="view">Xem</button>
        </div>
      );
  };
  render() {
    const { name, phone, account_id } = this.props.account;
    return (
      <div className="owner-account">
        <div className="owner-account-property">
          <span className="owner-account-name">{name}</span>
          <span className="owner-account-number">{phone}</span>
        </div>
        {this.button()}
      </div>
    );
  }
}

export default OwnerAccount;
