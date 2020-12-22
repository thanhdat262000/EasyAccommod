import React, { Component } from "react";
import "../../../../css/screens/adminScreen/ownerPost/listOwnerPost.css";
import OwnerPost from "./ownerPost";

class ListOwnerPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Bài đã duyệt", isChosen: true },
        { name: "Bài chưa duyệt", isChosen: false },
        { name: "Bài không duyệt", isChosen: false },
      ],
      listApprovedPost: [
        {
          ownerName: "thanh Dat",
          ownerPhone: "0966998657",
          city: "Hà Nội",
          district: "Quận Cầu Giấy",
          price: "1000000",
          time: "1 thg 12",
          status: "Đã duyệt",
        },
        {
          ownerName: "thanh Dat",
          ownerPhone: "0966998657",
          city: "Hà Nội",
          district: "Quận Cầu Giấy",
          price: "1000000",
          time: "1 thg 12",
          status: "Đã duyệt",
        },
      ],
      listPendingPost: [
        {
          ownerName: "thanh Dat",
          ownerPhone: "0966998657",
          city: "Hà Nội",
          district: "Quận Cầu Giấy",
          price: "1000000",
          time: "1 thg 12",
          status: "Chưa duyệt",
        },
        {
          ownerName: "thanh Dat",
          ownerPhone: "0966998657",
          city: "Hà Nội",
          district: "Quận Cầu Giấy",
          price: "1000000",
          time: "1 thg 12",
          status: "Chưa duyệt",
        },
      ],
      listDisappovedPost: [
        {
          ownerName: "thanh Dat",
          ownerPhone: "0966998657",
          city: "Hà Nội",
          district: "Quận Cầu Giấy",
          price: "1000000",
          time: "1 thg 12",
          status: "Không duyệt",
        },
        {
          ownerName: "thanh Dat",
          ownerPhone: "0966998657",
          city: "Hà Nội",
          district: "Quận Cầu Giấy",
          price: "1000000",
          time: "1 thg 12",
          status: "Không duyệt",
        },
      ],
    };
  }
  onClick = (item) => {
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
  render() {
    let listOwnerPosts;
    const { listTitles } = this.state;
    const [title] = this.state.listTitles.filter(
      (title) => title.isChosen === true
    );
    switch (title.name) {
      case "Bài đã duyệt":
        listOwnerPosts = this.state.listApprovedPost;
        break;
      case "Bài chưa duyệt":
        listOwnerPosts = this.state.listPendingPost;
        break;
      case "Bài không duyệt":
        listOwnerPosts = this.state.listDisappovedPost;
        break;
      default:
        break;
    }
    return (
      <div className="list-owner-posts">
        <div className="owner-posts-title-list">
          {listTitles.map((title, index) => (
            <div
              className="owner-posts-title-list-item"
              key={index}
              onClick={() => {
                this.onClick(title);
              }}
              style={{
                border: "10px 10px",
                borderBottom: title.isChosen ? "3px solid #4694DC" : "none",
              }}
            >
              <span className="name-title">{title.name}</span>
            </div>
          ))}
        </div>

        <div className="list-owner-posts-body">
          {listOwnerPosts.map((post, index) => (
            <OwnerPost ownerPost={post} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListOwnerPost;
