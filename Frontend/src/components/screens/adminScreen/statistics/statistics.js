import React, { Component } from "react";
import "../../../../css/screens/adminScreen/statistics/statistic.css";
class Statistic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { statisticPost } = this.props;
    return (
      <div className="statistic-post">
        <a
          href={`apartment/${statisticPost.apartment_id}`}
          className="statistic-post-link"
        >
          <div className="statistic-post-property">
            <div className="statistic-post-main-details">
              <img
                src="https://picsum.photos/id/1/200/300"
                alt="statistic-post"
              />
              <div className="statistic-post-main-info ">
                <span className="statistic-post-main-info-address">
                  {statisticPost.city}, {statisticPost.district}
                </span>
                <span className="statistic-post-main-info-price">
                  {statisticPost.price} VNĐ/Tháng
                </span>
                <span className="statistic-post-main-info-name">
                  {statisticPost.statistic}
                </span>
              </div>
            </div>
            <div className="statistic-post-statistics statistic-post-section">
              <div className="statistic-post-statistics-status">
                <span>
                  {" "}
                  {statisticPost.type === "mostView"
                    ? "Lượt xem"
                    : "Lượt thích"}{" "}
                </span>
                <span id="statistic">
                  {statisticPost.type === "mostView"
                    ? statisticPost.view
                    : statisticPost.favorite}
                </span>
              </div>
            </div>
            <div className="statistic-post-more-detail statistic-post-section">
              <div className="statistic-post-more-detail-time">
                <span>Ngày tạo: </span>
                <span id="statistic">{statisticPost.postTime}</span>
              </div>
            </div>
            <div className="statistic-post-expiration">
              <span>Quá hạn: </span>
              <span id="statistic">{statisticPost.expiration}</span>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Statistic;
