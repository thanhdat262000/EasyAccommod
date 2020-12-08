import React, { Component } from "react";
import "../../../css/screens/apartmentPost/apartmentPostExpiration.css";

class ApartmentPostExpiration extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { OnNext } = this.props;
    return (
      <div className="apartment-post-expiration">
        <form name="apartment-post-expiration-form">
          <div>
            <label>Thời hạn đăng</label>
            <select name="apartment-post-expiration-duration">
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
            <select name="apartment-post-expiration-term">
              <option>Tuần</option>
              <option>Tháng </option>
              <option>Năm</option>
            </select>
          </div>
          <div className="apartment-post-expiration-total">
            <span>Tổng số tiền phải trả: </span>
            <span id="total">300000</span>
            <b> VNĐ</b>
          </div>
          <button className="apartment-post-end" onClick={OnNext}>
            Đăng bài
          </button>
        </form>
      </div>
    );
  }
}

export default ApartmentPostExpiration;
