import React, { Component } from "react";
import {
  getEmail,
  getPrivilege,
  getUsserName,
} from "../redux/selector/selectors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../css/accountinfo.css";
class AccountInfo extends Component {
  render() {
    const { userName, privilege, email } = this.props;

    return (
      <div>
        <div className="ahaha">
          <h2>Thông tin tài khoản</h2>
        </div>
        <div className="contentArea">
          <div className="ct">
            <h5>Tên</h5>
            <p>{userName}</p>
          </div>
          <div className="ct">
            <h5>Email</h5>
            <p>{email}</p>
          </div>
          <div className="ct">
            <h5>Số điện thoại</h5>
            <p>{email}</p>
          </div>
          <div className="ct">
            <h5>Ngày sinh</h5>
            <p>{email}</p>
          </div>
          <div className="ct">
            <h5>Số CMTND</h5>
            <p>{email}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default connect((state) => ({
  userName: getUsserName(state),
  privilege: getPrivilege(state),
  email: getEmail(state),
}))(withRouter(AccountInfo));
