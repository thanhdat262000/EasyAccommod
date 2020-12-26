import React, { Component } from "react";
import UserSignin from "../../image/userSignin.svg";
import Next from "../../image/next.svg";
import "../../css/dropDownMenu.css";
import { withRouter } from "react-router-dom";
import { logout } from "../../service/auth.service";
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/logout.action";
import { getPrivilege, getUsserName } from "../../redux/selector/selectors";

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      listOptionsUser: [
        { id: "personalInfo", name: "Thông tin cá nhân" },
        { id: "favorites", name: "Danh sách yêu thích", link: "/favorite" },
        { id: "logout", name: "Đăng xuất" },
      ],
      listOptionsOwner: [
        {
          id: "apartment-management",
          name: "Quản lí phòng trọ",
          link: "/apartment-management",
        },
        { id: "apartment-post", name: "Đăng tin", link: "/apartment-post" },
        { id: "logout", name: "Đăng xuất" },
      ],
      listOptionsAdmin: [
        { id: "management", name: "Quản lí", link: "/management" },
        { id: "apartment-post", name: "Đăng tin", link: "/apartment-post" },
        { id: "logout", name: "Đăng xuất" },
      ],
    };
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu() {
    this.setState({
      isToggle: !this.state.isToggle,
    });
  }
  onLogout = (e) => {
    logout();
    this.props.logoutAction();
    this.props.history.push("/");
  };
  render() {
    let listOptions;
    const { isToggle } = this.state;
    const { userName, privilege } = this.props;
    switch (privilege) {
      case "user":
        listOptions = this.state.listOptionsUser;
        break;
      case "owner":
        listOptions = this.state.listOptionsOwner;
        break;
      case "admin":
        listOptions = this.state.listOptionsAdmin;
        break;
      default:
        break;
    }
    return (
      <div className="drop-down-menu">
        <div className="user-name" onClick={this.showMenu}>
          <img src={UserSignin} alt="user-signin" width={20} height={20} />
          <div className="name">
            <span>Xin chào, </span>
            <span>{userName}</span>
          </div>
          <img src={Next} alt="next" width={15} height={15} />
        </div>
        {isToggle ? (
          <ul id="list-options">
            <li id="list-options-resume">
              <img src={UserSignin} alt="user-signin" width={20} height={20} />
              <span>HỒ SƠ</span>
            </li>
            {listOptions.map((option, index) => {
              if (option.id === "logout")
                return (
                  <li
                    key={index}
                    id={`list-options-${option.id}`}
                    onClick={this.onLogout}
                  >
                    {option.name}
                  </li>
                );
              else
                return (
                  <li key={index} id={`list-options-${option.id}`}>
                    <a href={option.link}>{option.name}</a>
                  </li>
                );
            })}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    userName: getUsserName(state),
    privilege: getPrivilege(state),
  }),
  { logoutAction }
)(withRouter(DropDownMenu));
