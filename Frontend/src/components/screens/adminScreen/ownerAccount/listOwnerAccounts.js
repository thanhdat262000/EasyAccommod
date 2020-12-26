import React, { Component } from "react";
import OwnerAccount from "./ownerAccount";
import "../../../../css/screens/adminScreen/ownerAccount/listOwnerAccounts.css";
import {
  approveOwner,
  getApprovedAllOwners,
  getPendingAllOwners,
} from "../../../../service/admin.service";

class ListOwnerAccounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Tài khoản đã duyệt", isChosen: true },
        { name: "Tài khoản chưa duyệt", isChosen: false },
      ],
      listApprovedOwnerAccounts: [],
      listPendingOwnerAccounts: [],
    };
  }
  componentDidMount() {
    this.getApprovedOwners();
    this.getPendingOwners();
  }

  getApprovedOwners = () => {
    getApprovedAllOwners().then((data) => {
      this.setState({
        listApprovedOwnerAccounts: data,
      });
    });
  };
  getPendingOwners = () => {
    getPendingAllOwners().then((data) => {
      this.setState({
        listPendingOwnerAccounts: data,
      });
    });
  };
  approve = (id) => {
    approveOwner(id).then((status) => {
      if (status === 200) {
        this.getPendingOwners();
        this.getApprovedOwners();
      }
    });
  };
  onClick = (item) => {
    const { listTitles } = this.state;
    const i = listTitles.indexOf(item);
    if (!item.isChosen) {
      this.setState({
        listTitles: listTitles.map((title, index) => {
          if (index === i) return { ...title, isChosen: true };
          else return { ...title, isChosen: false };
        }),
      });
    }
  };
  render() {
    let listOwnerAccounts;
    const { listTitles } = this.state;
    const [title] = this.state.listTitles.filter(
      (title) => title.isChosen === true
    );
    if (title.name === "Tài khoản đã duyệt")
      listOwnerAccounts = this.state.listApprovedOwnerAccounts;
    else listOwnerAccounts = this.state.listPendingOwnerAccounts;
    return (
      <div className="list-owner-accounts">
        <div className="owner-accounts-title-list">
          {listTitles.map((title, index) => (
            <div
              className="owner-accounts-title-list-item"
              key={index}
              onClick={() => {
                this.onClick(title);
              }}
              style={{
                border: "10px 10px",
                borderBottom: title.isChosen ? "3px solid #4694DC" : "none",
              }}
            >
              <span className="name-title">{title.name}</span>
            </div>
          ))}
        </div>
        <div className="list-owner-accounts-body">
          {listOwnerAccounts.map((account, index) => (
            <OwnerAccount
              account={account}
              key={index}
              onClick={this.approve}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListOwnerAccounts;
