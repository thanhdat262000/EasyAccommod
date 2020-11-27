import React, { Component } from "react";
import InputCheckbox from "./inputCheckbox";
import InputSelection from "./inputSelection";
import InputField from "./inputField";
import "../../css/loginDetails/listInput.css";
import Cancel from "../../image/cancel.svg";
class ListInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listInput: [
        { type: "field", inputType: "Họ" },
        { type: "field", inputType: "Tên" },
        {
          type: "selection",
          selections: ["Tôi là người thuê nhà", "Tôi là chủ sở hữu"],
        },
        { type: "checkbox", criteria: "Cá nhân" },
        { type: "checkbox", criteria: "Doanh nghiệp" },
        { type: "field", inputType: "Số điện thoại" },
        { type: "field", inputType: "Ngày sinh" },
        { type: "field", inputType: "Số chứng minh thư" },
      ],
    };
  }
  render() {
    const { listInput } = this.state;
    return (
      <div className="list-input">
        <img
          src={Cancel}
          width={15}
          height={15}
          alt="cancel"
          onClick={this.props.onCancel}
        />
        <form name="signup-details">
          <div className="title">
            <h2>Đăng kí</h2>
          </div>
          {listInput.map((input) => {
            if (input.type === "selection")
              return <InputSelection input={input} />;
            else if (input.type === "field")
              return <InputField input={input} />;
            else return <InputCheckbox input={input} />;
          })}
          <div className="buttons">
            <button type="submit" name="continue-signup">
              Hoàn tất đăng kí
            </button>
            <button type="button" name="redirect-login">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ListInput;
