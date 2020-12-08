import React, { Component } from "react";
import "../../../css/screens/apartmentPost/apartmentPostCheckDuplicate.css";

class ApartmentPostCheckDuplicate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { OnNext } = this.props;
    return (
      <div className="apartment-post-check-duplicate">
        <div className="apartment-post-check-duplicate-report">
          <h4>KẾT QUẢ KIỂM TRA:</h4>
          <p>Tài sản chưa được đăng bởi bất kì tài khoản nào</p>
        </div>
        <button className="apartment-post-continue" onClick={OnNext}>
          Tiếp theo
        </button>
      </div>
    );
  }
}

export default ApartmentPostCheckDuplicate;
