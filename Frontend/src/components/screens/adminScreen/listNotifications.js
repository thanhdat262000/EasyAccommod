import React, { Component } from "react";
import Notification from "./notification";
import "../../../css/screens/adminScreen/listNotifications.css";
import { getNoti } from "../../../service/owner.service";
import { connect } from "react-redux";
import { getPrivilege } from "../../../redux/selector/selectors";
import { getOwnerNoti } from "../../../service/admin.service";
class ListNotifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNotifications: [],
    };
  }
  componentDidMount() {
    if (this.props.privilege === "owner") {
      getNoti().then((data) => {
        this.setState({
          listNotifications: data,
        });
      });
    } else {
      getOwnerNoti().then((data) => {
        this.setState({
          listNotifications: data,
        });
      });
    }
  }
  render() {
    const { listNotifications } = this.state;
    return (
      <div className="list-notifications">
        {listNotifications.map((noti, index) => (
          <Notification key={index} noti={noti} />
        ))}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    privilege: getPrivilege(state),
  }),
  null
)(ListNotifications);
