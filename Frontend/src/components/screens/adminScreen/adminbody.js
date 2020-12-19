import React, { Component } from "react";
import "../../../css/screens/adminScreen/adminBody.css";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ListNotiMange from "./listNotiManage";
import ListAccManage from "./listAccManage";
import ListPostManage from "./listPostManage";
import ChatComponent from "./chatComponent";
import AnalysisComponent from "./analysisComponent";
import chatComponent from "./chatComponent";

class AdminBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Quản lý tài khoản", isChosen: true },
        { name: "Quản lý bài đăng", isChosen: false },
        { name: "Thông báo", isChosen: false },
        { name: "Chat", isChosen: false },
        { name: "Thống kê", isChosen: false },
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
                  borderBottom: title.isChosen ? "2px solid #4694DC" : "none",
                }}
              >
                <span>{title.name}</span>
              </div>
            ))}
          </div>
          <div className="admin-content">
            {title.name === "Thông báo" ? (
              <ListNotiMange />
            ) : title.name === "Quản lý tài khoản" ? (
              <ListAccManage />
            ) : title.name === "Quản lý bài đăng" ? (
              <ListPostManage /> ? (
                title.name === "Chat"
              ) : (
                <ChatComponent />
              )
            ) : (
              <AnalysisComponent />
            )}
          </div>
        </div>
        <MessengerCustomerChat
          pageId="100489201969961"
          appId="300698198025899"
        />
      </div>
    );
  }
}

export default AdminBody;
