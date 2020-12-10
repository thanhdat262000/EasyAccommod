import React, { Component } from "react";
import UserSignin from "../../image/userSignin.svg";
import Next from "../../image/next.svg";
import "../../css/dropDownMenu.css";

class DropDownMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false,
      listOptionsUser: [
        "Thông tin cá nhân",
        "Tin nhắn",
        "Danh sách yêu thích",
        "Đăng xuất",
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
            <li>
              <img src={UserSignin} alt="user-signin" width={20} height={20} />
              <span>HỒ SƠ</span>
            </li>
            {listOptionsUser.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default DropDownMenu;
