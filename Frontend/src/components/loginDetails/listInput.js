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
        { type: "text", inputType: "Họ", name: "lastName" },
        { type: "text", inputType: "Tên", name: "firstName" },
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
        { type: "text", inputType: "Số điện thoại", name: "phone" },
        { type: "date", inputType: "Ngày sinh", name: "birthday" },
        { type: "text", inputType: "Số chứng minh thư", name: "idCard" },
      ],
    };
  }
  render() {
    const { listInput } = this.state;
    const { values, onChange, onBlur, errors, touched } = this.props;
    return (
      <div className="signup-details-body">
        {listInput.map((input, index) => {
          if (input.type === "selection")
            return (
              <InputSelection
                input={input}
                key={index}
                value={values[input.name]}
              />
            );
          else if (input.type === "text" || input.type === "date")
            return (
              <InputField
                input={input}
                key={index}
                value={values[input.name]}
                onChange={onChange}
                onBlur={onBlur}
                error={errors[input.name]}
                touched={touched[input.name]}
              />
            );
          else
            return (
              <InputCheckbox
                input={input}
                key={index}
                value={values[input.name]}
                onChange={onChange}
                onBlur={onBlur}
              />
            );
        })}
        <div className="buttons">
          <button type="button" name="continue-signup">
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
