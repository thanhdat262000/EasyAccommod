import React, { Component } from "react";
import {
  getEmail,
  getPrivilege,
  getUsserName,
} from "../redux/selector/selectors";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "../css/accountinfo.css";
import { getOwnerInfo } from "../service/admin.service";
import { getInfo } from "../service/user.service";
class AccountInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountInfo: {},
    };
  }
  componentDidMount() {
    const { match } = this.props;
    if (!match.params.id) {
      getInfo().then((data) => {
        console.log(data);
        this.setState({
          accountInfo: data,
        });
      });
    } else
      getOwnerInfo(match.params.id).then((data) => {
        console.log(data);
        this.setState({
          accountInfo: data,
        });
      });
  }
  render() {
    const { name, email, phone, idCard } = this.state.accountInfo;

    return (
      <div>
        <div className="ahaha">
          <h2>Thông tin tài khoản</h2>
        </div>
        <div className="contentArea">
          <div className="ct">
            <h5>Tên</h5>
            <p>{name}</p>
          </div>
          <div className="ct">
            <h5>Email</h5>
            <p>{email}</p>
          </div>
          <div className="ct">
            <h5>Số điện thoại</h5>
            <p>{phone}</p>
          </div>
          <div className="ct">
            <h5>Số CMTND</h5>
            <p>{idCard}</p>
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
