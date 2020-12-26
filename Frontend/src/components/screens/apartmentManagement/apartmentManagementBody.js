import { connect } from "react-redux";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../../css/screens/apartmentManagement/apartmentManagementBody.css";
import { getPrivilege } from "../../../redux/selector/selectors";
import PostedApartment from "./postedApartment";
import { Redirect } from "react-router-dom";
import {
  changeDeleted,
  changeRented,
  getApprovedApartments,
  getDisapprovedApartments,
  getExpiredApartments,
  getPendingApartments,
  getRentedApartments,
} from "../../../service/owner.service";

class ApartmentManagementBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Phòng đã đăng", isChosen: true },
        { name: "Phòng chờ phê duyệt", isChosen: false },
        { name: "Phòng đã cho thuê", isChosen: false },
        { name: "Phòng đã hết hạn", isChosen: false },
        { name: "Phòng không được duyệt", isChosen: false },
      ],
      listPostedApartment: [],
      listPendingApartment: [],
      listRentedApartment: [],
      listExpiredApartment: [],
      listDisapprovedApartment: [],
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
  getAllDisapprovedApartments = () => {
    getDisapprovedApartments().then((data) => {
      this.setState({
        listDisapprovedApartment: data,
      });
    });
  };
  componentDidMount() {
    this.getAllApprovedApartments();
    this.getAllPendingApartments();
    this.getAllRentedApartments();
    this.getAllExpiredApartments();
    this.getAllDisapprovedApartments();
  }
  onChangeRented = (id) => {
    changeRented(id).then((response) => {
      console.log(response);
      if (response.status === 200) {
        this.getAllApprovedApartments();
        this.getAllRentedApartments();
        toast.success("Cho thuê thành công", {
          draggable: true,
          position: toast.POSITION.BOTTOM_LEFT,
          closeOnClick: true,
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    });
  };
  onChangeDeleted = (id) => {
    changeDeleted(id).then((response) => {
      if (response.status === 200) {
        this.getAllApprovedApartments();
        this.getAllExpiredApartments();
        toast.success("Xóa thành công", {
          draggable: true,
          position: toast.POSITION.BOTTOM_LEFT,
          closeOnClick: true,
          autoClose: 3000,
          hideProgressBar: true,
        });
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
        case "Phòng không được duyệt":
          listApartment = this.state.listDisapprovedApartment;
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
                <ToastContainer />
              </div>
              <div className="list-posted-apartment">
                {listApartment.length !== 0 ? (
                  listApartment.map((apartment, index) => (
                    <PostedApartment
                      key={index}
                      apartment={apartment}
                      onChangeRented={this.onChangeRented}
                      onChangeDeleted={this.onChangeDeleted}
                    />
                  ))
                ) : (
                  <div className="list-posted-apartment-empty">
                    <p>Không có phòng nào trong mục này</p>
                  </div>
                )}
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
