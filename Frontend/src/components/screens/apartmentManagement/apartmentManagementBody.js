import { connect } from "react-redux";
import React, { Component } from "react";
import "../../../css/screens/apartmentManagement/apartmentManagementBody.css";
import { getPrivilege } from "../../../redux/selector/selectors";
import PostedApartment from "./postedApartment";
import { Redirect } from "react-router-dom";
import {
  getApprovedApartments,
  getExpiredApartments,
  getPendingApartments,
  getRentedApartments,
} from "../../../service/user.service";

class ApartmentManagementBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Phòng đã đăng", isChosen: true },
        { name: "Phòng chờ phê duyệt", isChosen: false },
        { name: "Phòng đã cho thuê", isChosen: false },
        { name: "Phòng đã hết hạn", isChosen: false },
      ],
      listPostedApartment: [
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "approved",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "approved",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "approved",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "approved",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "approved",
        },
      ],
      listPendingApartment: [
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "pending",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "pending",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "pending",
        },
      ],
      listRentedApartment: [
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "rented",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "rented",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "rented",
        },
      ],
      listExpiredApartment: [
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "expired",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "expired",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          expiration: "20 thg 11 2020",
          status: "expired",
        },
      ],
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    getApprovedApartments().then((data) => {
      this.setState({
        listPostedApartment: data,
      });
    });
    getPendingApartments().then((data) => {
      this.setState({
        listPendingApartment: data,
      });
    });
    getRentedApartments().then((data) => {
      this.setState({
        listRentedApartment: data,
      });
    });
    getExpiredApartments().then((data) => {
      this.setState({
        listExpiredApartment: data,
      });
    });
  }
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
    console.log(privilege);
    if (privilege === "user" || !privilege) return <Redirect to="/" />;
    else {
      var listApartment = [];
      const { listTitles } = this.state;
      const [state] = listTitles.filter((title) => title.isChosen === true);
      switch (state.name) {
        case "Phòng đã đăng":
          listApartment = this.state.listPostedApartment;
          break;
        case "Phòng chờ phê duyệt":
          listApartment = this.state.listPendingApartment;
          break;
        case "Phòng đã cho thuê":
          listApartment = this.state.listRentedApartment;
          break;
        case "Phòng đã hết hạn":
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
              <div className="listed-posted-apartment">
                {listApartment.map((apartment, index) => (
                  <PostedApartment key={index} apartment={apartment} />
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
)(ApartmentManagementBody);
