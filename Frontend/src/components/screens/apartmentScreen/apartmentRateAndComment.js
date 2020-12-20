import React, { Component } from "react";
import getFormData from "get-form-data";
import { ReactComponent as Star } from "../../../image/star.svg";
import "../../../css/screens/apartmentScreen/apartmentRateAndComment.css";
import { comment } from "../../../service/user.service";
class ApartmentRateAndComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listStars: ["0.3", "0.3", "0.3", "0.3", "0.3"],
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(index) {
    this.setState({
      listStars: this.state.listStars.map((star, i) => {
        if (i <= index) return 1;
        else return 0.3;
      }),
    });
  }
  onSubmit = () => {
    let form = document.querySelector("#apartment-rate-and-comment-form");
    let data = getFormData(form);
    data.rate = this.state.listStars.filter((star) => {
      return star === 1;
    }).length;
    console.log(data);
    const { params } = this.props;
    comment(params, data)
      .then((response) => {
        if (response.status === 200)
          document.getElementById("comment-sent").innerHTML =
            "Gửi bình luận thành công.";
      })
      .catch((error) => {
        document.getElementById("comment-sent").innerHTML =
          "Bạn không thể gửi bình luận";
      });
  };
  onFocus = () => {
    document.getElementById("comment-sent").innerHTML = "";
  };
  render() {
    const { listStars } = this.state;
    return (
      <div className="apartment-rate-and-comment">
        <form id="apartment-rate-and-comment-form">
          <div className="apartment-rate-star">
            <span>Đánh giá</span>
            <div className="apartment-rate-five-stars">
              {listStars.map((star, index) => {
                return (
                  <Star
                    width="25px"
                    height="25px"
                    fillOpacity={star}
                    key={index}
                    onClick={() => this.onClick(index)}
                  />
                );
              })}
            </div>
          </div>
          <div className="apartment-comment">
            <span>Bình luận</span>
            <textarea
              placeholder="Bình luận"
              className="comment"
              name="comment"
              onFocus={this.onFocus}
            />
            <span id="comment-sent"></span>
          </div>
          <button type="button" onClick={this.onSubmit}>
            Gửi
          </button>
        </form>
      </div>
    );
  }
}

export default ApartmentRateAndComment;
