import React, { Component } from "react";
import ListApartmentPostProperty from "./listApartmentPostProperty";
import "../../../css/screens/apartmentPost/apartmentPostBody.css";

class ApartmentPostBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        {
          name: "Phòng đã đăng",
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
    const { listTitles } = this.state;
    return (
      <div className="apartment-post-main-body">
        <div className="apartment-post-body">
          <div className="apartment-post-list-titles">
            {listTitles.map((title, index) => (
              <div
                className="apartment-post-title"
                style={{
                  backgroundColor: title.isChosen
                    ? "#4694DC"
                    : "rgba(0, 0, 0, 0.1)",
                }}
                onClick={this.onClick(title)}
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
          <ListApartmentPostProperty />
        </div>
      </div>
    );
  }
}

export default ApartmentPostBody;
