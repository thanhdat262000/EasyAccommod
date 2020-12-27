import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../../../css/screens/adminScreen/ownerPost/ownerPost.css";

class OwnerPost extends Component {
  state = {};
  render() {
    const { ownerPost, onApprove, onDisapprove } = this.props;
    let buttons;
    switch (ownerPost.status) {
      case "Đã được duyệt":
        buttons = null;
        break;
      case "Chưa được duyệt":
        buttons = (
          <div className="owner-post-action">
            <button
              id="approve"
              onClick={() => onApprove(ownerPost.apartment_id)}
            >
              Duyệt
            </button>
            <button
              id="disapprove"
              onClick={() => onDisapprove(ownerPost.apartment_id)}
            >
              Không duyệt
            </button>
          </div>
        );
        break;
      case "Không được duyệt":
        buttons = (
          <div className="owner-post-action">
            <button id="re-approve">Khôi phục</button>
          </div>
        );
        break;
      default:
        break;
    }
    return (
      <div className="owner-post">
        <a
          href={`apartment/${ownerPost.apartment_id}`}
          className="owner-post-link"
        >
          <div className="owner-post-property">
            <div className="owner-post-main-details">
              <img src="https://picsum.photos/id/1/200/300" alt="owner-post" />
              <div className="owner-post-main-info ">
                <span className="owner-post-main-info-address">
                  {ownerPost.city}, {ownerPost.district}
                </span>
                <span className="owner-post-main-info-price">
                  {ownerPost.price} VNĐ/Tháng
                </span>
                <span className="owner-post-main-info-name">
                  {ownerPost.owner}
                </span>
              </div>
            </div>
            <div className="owner-post-statistics owner-post-section">
              <div className="owner-post-statistics-status">
                <span>Trạng thái: </span>
                <span id="statistic">{ownerPost.status}</span>
              </div>
            </div>
            <div className="owner-post-more-detail owner-post-section">
              <div className="owner-post-more-detail-time">
                <span>Ngày tạo: </span>
                <span id="statistic">{ownerPost.postTime.split(":")[0]}</span>
              </div>
            </div>
            <div className="owner-post-expiration">
              <span>Quá hạn: </span>
              <span id="statistic">{ownerPost.expiration.split(":")[0]}</span>
            </div>
          </div>
        </a>
        {buttons}
      </div>
    );
  }
}

export default withRouter(OwnerPost);
