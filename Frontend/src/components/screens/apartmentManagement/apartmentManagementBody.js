import React, { Component } from "react";
import "../../../css/screens/apartmentManagement/apartmentManagementBody.css";
import PostedApartment from "./postedApartment";

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
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "approved",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "approved",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "approved",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "approved",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
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
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "pending",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "pending",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          type: "căn hộ",
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "pending",
        },
      ],
      listRentedApartment: [
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "rented",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "rented",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "rented",
        },
      ],
      listExpiredApartment: [
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "expired",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "expired",
        },
        {
          image: "https://picsum.photos/id/1/200/300",
          address: "Quận Cầu Giấy, Hà Nội",
          price: "10000000",
          view: 54,
          like: 23,
          size: 15,
          bedRoom: 2,
          bathRoom: 1,
          expiration: "20 thg 11 2020",
          status: "expired",
        },
      ],
    };
    this.onClick = this.onClick.bind(this);
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
                    borderBottom: title.isChosen ? "2px solid #4694DC" : "none",
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

export default ApartmentManagementBody;
