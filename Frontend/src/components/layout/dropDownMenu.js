import React, { Component } from "react";
import UserSignin from "../../image/userSignin.svg";
import Next from "../../image/next.svg";
import "../../css/dropDownMenu.css";
import { logout } from "../../service/auth.service";
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/logout.action";

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      listOptionsUser: [
        { id: "personalInfo", name: "Thông tin cá nhân" },
        { id: "message", name: "Tin nhắn", link: "/messages" },
        { id: "favorites", name: "Danh sách yêu thích", link: "/favorite" },
        { id: "logout", name: "Đăng xuất" },
      ],
      listOptionsOwner: [
        "Quản lí phòng trọ",
        "Đăng tin",
        "Tin nhắn",
        "Đăng xuất",
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
  };
  render() {
    const { listOptionsUser, isToggle } = this.state;
    const { userName, privilege } = this.props;
    // listOpstions =
    //   privilege === "user"
    //     ? this.state.listOptionsUser
    //     : this.state.listOptionsOwner;
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
            {listOptionsUser.map((option, index) => {
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

export default connect(null, { logoutAction })(DropDownMenu);
