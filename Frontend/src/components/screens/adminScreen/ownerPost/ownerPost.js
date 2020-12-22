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
