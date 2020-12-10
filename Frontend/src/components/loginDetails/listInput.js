import React, { Component } from "react";
import InputCheckbox from "./inputCheckbox";
import InputSelection from "./inputSelection";
import InputField from "./inputField";
import "../../css/loginDetails/listInput.css";
class ListInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listInput: [
        { type: "field", inputType: "Họ", name: "lastName" },
        { type: "field", inputType: "Tên", name: "firstName" },
        {
          type: "selection",
          selections: [
            { value: "user", name: "Tôi là người thuê nhà" },
            { value: "owner", name: "Tôi là chủ sở hữu" },
          ],
          name: "privilege",
        },
        { type: "checkbox", criteria: "Cá nhân", property: "individual" },
        { type: "checkbox", criteria: "Doanh nghiệp", property: "company" },
        { type: "field", inputType: "Số điện thoại", name: "phone" },
        { type: "field", inputType: "Ngày sinh", name: "birthday" },
        { type: "field", inputType: "Số chứng minh thư", name: "idCard" },
      ],
    };
  }
  render() {
    const { listInput } = this.state;
    return (
      <div className="signup-details-body">
        {listInput.map((input, index) => {
          if (input.type === "selection")
            return <InputSelection input={input} key={index} />;
          else if (input.type === "field")
            return <InputField input={input} key={index} />;
          else return <InputCheckbox input={input} key={index} />;
        })}
        <div className="buttons">
          <button type="submit" name="continue-signup">
            Hoàn tất đăng kí
          </button>
          <button type="button" name="redirect-login">
            Đăng nhập
          </button>
        </div>
      </div>
    );
  }
}

export default ListInput;
