import React, { Component } from "react";
import { Widget } from "react-chat-widget";
import "../../../css/screens/adminScreen/adminBody.css";
import FaceIcon from "@material-ui/icons/Face";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import ListOwnerAccounts from "./ownerAccount/listOwnerAccounts";
import ListOwnerPost from "./ownerPost/listOwnerPosts";
import OwnerNoti from "./ownerNoti/ownerNoti";
import { connect } from "react-redux";
import { getPrivilege } from "../../../redux/selector/selectors";
import { Redirect } from "react-router-dom";
class AdminBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Quản lý tài khoản", isChosen: true, icon: FaceIcon },
        { name: "Quản lý bài đăng", isChosen: false, icon: AllInboxIcon },
        { name: "Thông báo", isChosen: false, icon: NotificationsIcon },
        { name: "Thống kê", isChosen: false, icon: ShowChartIcon },
      ],
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(item) {
    return () => {
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
  }
  render() {
    const { privilege } = this.props;
    if (!privilege || privilege !== "admin") return <Redirect to="/" />;
    const { listTitles } = this.state;
    const [title] = this.state.listTitles.filter(
      (title) => title.isChosen === true
    );
    return (
      <div className="admin-main-body">
        <div className="admin-body">
          <div className="title-list">
            {listTitles.map((title, index) => (
              <div
                className="title-list-item"
                key={index}
                onClick={this.onClick(title)}
                style={{
                  border: "10px 10px",
                  borderBottom: title.isChosen ? "3px solid #4694DC" : "none",
                }}
              >
                <title.icon className="icon-title" />
                <span className="name-title">{title.name}</span>
              </div>
            ))}
          </div>
          <div className="admin-content">
            {title.name === "Quản lý tài khoản" ? (
              <ListOwnerAccounts />
            ) : title.name === "Quản lý bài đăng" ? (
              <ListOwnerPost />
            ) : title.name === "Thông báo" ? (
              <OwnerNoti />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    privilege: getPrivilege(state),
  }),
  null
)(AdminBody);
