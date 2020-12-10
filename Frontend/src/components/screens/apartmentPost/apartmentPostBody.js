import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ListApartmentPostProperty from "./listApartmentPostProperty";
import "../../../css/screens/apartmentPost/apartmentPostBody.css";
import ApartmentPostImage from "./apartmentPostImage";
import ListApartmentPostRenter from "./listApartmentPostRenter";
import ApartmentPostCheckDuplicate from "./apartmentPostCheckDuplicate";
import ApartmentPostExpiration from "./apartmentPostExpiration";

class ApartmentPostBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        {
          name: "Nhập dữ liệu phòng",
          description: "Nhập dữ liệu cơ bản",
          isChosen: true,
        },
        {
          name: "Tải lên ảnh",
          description: "Tải ảnh và quản lý ảnh",
          isChosen: false,
        },
        {
          name: "Người thuê",
          description: "Nhập dữ liệu người thuê",
          isChosen: false,
        },
        {
          name: "Kiểm tra trùng lặp",
          description: "Kiểm tra đồng thời",
          isChosen: false,
        },
        {
          name: "Thời gian đăng bài",
          description: "Thời gian hiển thị bài",
          isChosen: false,
        },
      ],
    };
  }
  OnNext = () => {
    const { listTitles } = this.state;
    const [title] = listTitles.filter((title) => title.isChosen === true);
    const index = listTitles.indexOf(title);
    console.log(index);
    if (index === 4) this.props.history.push("/");
    this.setState({
      listTitles: [
        ...listTitles.slice(0, index),
        { ...title, isChosen: false },
        { ...listTitles[index + 1], isChosen: true },
        ...listTitles.slice(index + 2),
      ],
    });
  };
  OnBack = () => {
    const { listTitles } = this.state;
    const [title] = listTitles.filter((title) => title.isChosen === true);
    const index = listTitles.indexOf(title);
    console.log(index);
    this.setState({
      listTitles: [
        ...listTitles.slice(0, index - 1),
        { ...listTitles[index - 1], isChosen: true },
        { ...title, isChosen: false },

        ...listTitles.slice(index + 1),
      ],
    });
  };
  nextButton = () => {
    const [state] = this.state.listTitles.filter(
      (title) => title.isChosen === true
    );
    switch (state.name) {
      case "Nhập dữ liệu phòng":
      case "Tải lên ảnh":
      case "Người thuê":
      case "Kiểm tra trùng lặp":
        return (
          <button
            type="button"
            className="apartment-post-continue"
            onClick={this.OnNext}
          >
            Tiếp theo
          </button>
        );
      case "Thời gian đăng bài":
        return (
          <button
            type="button"
            className="apartment-post-end"
            onClick={this.OnNext}
          >
            Đăng bài
          </button>
        );
      default:
        return null;
    }
  };
  previousButton = () => {
    const [state] = this.state.listTitles.filter(
      (title) => title.isChosen === true
    );
    switch (state.name) {
      case "Tải lên ảnh":
      case "Người thuê":
      case "Kiểm tra trùng lặp":
      case "Thời gian đăng bài":
        return (
          <button
            type="button"
            className="apartment-post-previous"
            onClick={this.OnBack}
          >
            Trở lại
          </button>
        );
      default:
        return null;
    }
  };
  render() {
    let apartmentPostBody;
    const { listTitles } = this.state;
    const [state] = listTitles.filter((title) => title.isChosen === true);
    switch (state.name) {
      case "Nhập dữ liệu phòng":
        apartmentPostBody = <ListApartmentPostProperty />;
        break;
      case "Tải lên ảnh":
        apartmentPostBody = <ApartmentPostImage />;
        break;
      case "Người thuê":
        apartmentPostBody = <ListApartmentPostRenter />;
        break;
      case "Kiểm tra trùng lặp":
        apartmentPostBody = <ApartmentPostCheckDuplicate />;
        break;
      case "Thời gian đăng bài":
        apartmentPostBody = <ApartmentPostExpiration />;
        break;
      default:
        break;
      // return <Redirect to="/apartment-management" />;
    }
    return (
      <div className="apartment-post-main-body">
        <div className="apartment-post-body">
          <div className="apartment-post-list-titles">
            {listTitles.map((title, index) => (
              <div
                key={index}
                className="apartment-post-title"
                style={{
                  backgroundColor: title.isChosen
                    ? "#4694DC"
                    : "rgba(0, 0, 0, 0.1)",
                }}
              >
                <span
                  style={{
                    color: title.isChosen ? "white" : "black",
                  }}
                >
                  {index + 1}
                </span>
                <div>
                  <span
                    id="name"
                    style={{
                      color: title.isChosen ? "white" : "black",
                    }}
                  >
                    {title.name}
                  </span>
                  <span id="description">{title.description}</span>
                </div>
              </div>
            ))}
          </div>
          <form name="apartment-post-form">
            {" "}
            {apartmentPostBody}
            <div className="apartment-post-form-buttons">
              {" "}
              {this.previousButton()}
              {this.nextButton()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ApartmentPostBody);
