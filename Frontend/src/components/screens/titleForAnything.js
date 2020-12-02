import React, { Component } from "react";
import "../../css/screens/titleForAnything.css";

class TitleForAnything extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: ["Tin đã gửi", "Tin đã nhận"],
    };
  }
  shouldComponentUpdate() {
    this.setState({
      listTitles: this.props.titles,
    });
  }
  render() {
    const { listTitles } = this.state;
    return (
      <div className="title-for-anything">
        {listTitles.map((title) => (
          <div className="title">
            <span>{title}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default TitleForAnything;
