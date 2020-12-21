import React, { Component } from "react";
import "../../../css/screens/apartmentPost/apartmentPostExpiration.css";

class ApartmentPostExpiration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 20000,
    };
  }
  countTotal = (e) => {
    const data = e.target.name;
    const value = e.target.value;
    if (data === "numberDate") {
      switch (document.getElementsByName("typeDate")[0].value) {
        case "Tuần":
          this.setState({
            totalPrice: parseInt(value) * 20000,
          });
          break;
        case "Tháng":
          this.setState({
            totalPrice: parseInt(value) * 60000,
          });
          break;
        case "Năm":
          this.setState({
            totalPrice: parseInt(value) * 500000,
          });
          break;
        default:
          break;
      }
    } else {
      switch (value) {
        case "Tuần":
          this.setState({
            totalPrice:
              parseInt(document.getElementsByName("numberDate")[0].value) *
              20000,
          });
          break;
        case "Tháng":
          this.setState({
            totalPrice:
              parseInt(document.getElementsByName("numberDate")[0].value) *
              60000,
          });
          break;
        case "Năm":
          this.setState({
            totalPrice:
              parseInt(document.getElementsByName("numberDate")[0].value) *
              500000,
          });
          break;
        default:
          break;
      }
    }
  };
  render() {
    return (
      <div className="apartment-post-expiration">
        <div className="apartment-post-expiration-priceTable">
          <table>
            <tr>
              <th colSpan="2"> Bảng giá (đơn vị: VNĐ)</th>
            </tr>
            <tr>
              <td>Tuần</td>
              <td>20000</td>
            </tr>
            <tr>
              <td>Tháng</td>
              <td>60000</td>
            </tr>{" "}
            <tr>
              <td>Năm</td>
              <td>500000</td>
            </tr>
          </table>
        </div>
        <div>
          <label>Thời hạn đăng</label>
          <select name="numberDate" onChange={this.countTotal}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <select name="typeDate" onChange={this.countTotal}>
            <option>Tuần</option>
            <option>Tháng </option>
            <option>Năm</option>
          </select>
        </div>
        <div className="apartment-post-expiration-total">
          <span>Tổng số tiền phải trả: </span>
          <span id="total">{this.state.totalPrice}</span>
          <b> VNĐ</b>
        </div>
      </div>
    );
  }
}

export default ApartmentPostExpiration;
