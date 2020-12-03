import React, { Component } from "react";
import ListSearchAndFilter from "../../layout/searchAndfilter/listSearchAndFilter";
import ListReceivedMessages from "./listReceivedMessages";
import "../../../css/screens/messageScreen/messageBody.css";
import ListSentMessages from "./listSentMessages";

class MessageBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Hộp thư đến", isChosen: true },
        { name: "Hộp thư đi", isChosen: false },
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
      <div className="message-main-body">
        <div className="message-body">
          <ListSearchAndFilter />
          {/* <ListReceivedMessages /> */}
          <div className="message-body-list">
            {" "}
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
            {title.name === "Hộp thư đến" ? (
              <ListReceivedMessages />
            ) : (
              <ListSentMessages />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MessageBody;
