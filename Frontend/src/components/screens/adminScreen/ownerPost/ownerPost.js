<<<<<<< HEAD
import { connect } from "react-redux";
import React, { Component } from "react";
import "../../../../css/screens/apartmentManagement/apartmentManagementBody.css";
import { getPrivilege } from "../../../../redux/selector/selectors";
import PostedApartment from "../../apartmentManagement/postedApartment";
import { Redirect } from "react-router-dom";
import {
  changeDeleted,
  changeRented,
  getApprovedApartments,
  getExpiredApartments,
  getPendingApartments,
  getRentedApartments,
} from "../../../../service/owner.service";

class OwnerPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Bài viết đã đăng", isChosen: true },
        { name: "Bài viết chờ phê duyệt", isChosen: false },
        { name: "Bài viết đã hết hạn", isChosen: false },
      ],
      listPostedApartment: [],
      listPendingApartment: [],
      listRentedApartment: [],
      listExpiredApartment: [],
    };
    this.onClick = this.onClick.bind(this);
  }
  getAllApprovedApartments = () => {
    getApprovedApartments().then((data) => {
      this.setState({
        listPostedApartment: data,
      });
    });
  };
  getAllPendingApartments = () => {
    getPendingApartments().then((data) => {
      this.setState({
        listPendingApartment: data,
      });
    });
  };
  getAllRentedApartments = () => {
    getRentedApartments().then((data) => {
      this.setState({
        listRentedApartment: data,
      });
    });
  };
  getAllExpiredApartments = () => {
    getExpiredApartments().then((data) => {
      this.setState({
        listExpiredApartment: data,
      });
    });
  };
  componentDidMount() {
    this.getAllApprovedApartments();
    this.getAllPendingApartments();
    this.getAllRentedApartments();
    this.getAllExpiredApartments();
  }
  onChangeRented = (id) => {
    changeRented(id).then((response) => {
      console.log(response);
      if (response.status === 200) {
        this.getAllApprovedApartments();
        this.getAllRentedApartments();
      }
    });
  };
  onChangeDeleted = (id) => {
    changeDeleted(id).then((response) => {
      if (response.status === 200) {
        this.getAllApprovedApartments();
        this.getAllExpiredApartments();
      }
    });
  };
  onClick(item) {
    return () => {
      const { listTitles } = this.state;
      const i = listTitles.indexOf(item);
      if (!item.isChosen) {
        this.setState({
          listTitles: listTitles.map((title, index) => {
            if (index === i) return { ...title, isChosen: true };
            else return { ...title, isChosen: false };
          }),
        });
      }
    };
  }
  render() {
    const { privilege } = this.props;
    if (privilege === "user" || !privilege) return <Redirect to="/" />;
    else {
      var listApartment = [];
      const { listTitles } = this.state;
      const [state] = listTitles.filter((title) => title.isChosen === true);
      switch (state.name) {
        case "Bài viết đã đăng":
          listApartment = this.state.listPostedApartment;
          break;
        case "Bài viết chờ phê duyệt":
          listApartment = this.state.listPendingApartment;
          break;
        case "Bài viết đã hết hạn":
          listApartment = this.state.listExpiredApartment;
          break;
        default:
          break;
      }
      return (
        <div className="apartment-management-main-body">
          <div className="apartment-management-body">
            <div className="list-posted-apartment">
              <div className="title-list">
                {listTitles.map((title, index) => (
                  <div
                    className="title-list-item"
                    key={index}
                    onClick={this.onClick(title)}
                    style={{
                      borderBottom: title.isChosen
                        ? "2px solid #4694DC"
                        : "none",
                    }}
                  >
                    <span>{title.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  (state) => ({
    privilege: getPrivilege(state),
  }),
  null
)(OwnerPost);
=======
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../../../css/screens/adminScreen/ownerPost/ownerPost.css";

class OwnerPost extends Component {
  state = {};
  render() {
    const { ownerPost } = this.props;
    let buttons;
    switch (ownerPost.status) {
      case "Đã duyệt":
        buttons = null;
        break;
      case "Chưa duyệt":
        buttons = (
          <div className="owner-post-action">
            <button id="approve">Duyệt</button>
          </div>
        );
        break;
      case "Không duyệt":
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
                  {ownerPost.ownerName}
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
                <span id="statistic">{ownerPost.time}</span>
              </div>
            </div>
            <div className="owner-post-expiration">
              <span>Quá hạn: </span>
              <span id="statistic">{ownerPost.time}</span>
            </div>
          </div>
        </a>
        {buttons}
      </div>
    );
  }
}

export default withRouter(OwnerPost);
>>>>>>> 3d9ed78b8757f320c4261a912f82998e02e6f65f
