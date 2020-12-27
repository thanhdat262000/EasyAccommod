import React, { Component } from "react";
import "../../../../css/screens/adminScreen/ownerPost/listOwnerPost.css";
import {
  approvePost,
  disapprovePost,
  getApprovedPosts,
  getDisapprovedPosts,
  getPendingPosts,
} from "../../../../service/admin.service";
import OwnerPost from "./ownerPost";
import { toast, ToastContainer } from "react-toastify";
class ListOwnerPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Bài đã duyệt", isChosen: true },
        { name: "Bài chưa duyệt", isChosen: false },
        { name: "Bài không duyệt", isChosen: false },
      ],
      listApprovedPost: [],
      listPendingPost: [],
      listDisappovedPost: [],
    };
  }

  getAllApprovedPost = () => {
    getApprovedPosts().then((data) => {
      this.setState({
        listApprovedPost: data,
      });
    });
  };
  getAllPendingPost = () => {
    getPendingPosts().then((data) => {
      this.setState({
        listPendingPost: data,
      });
    });
  };
  getAllDisapprovedPost = () => {
    getDisapprovedPosts().then((data) => {
      this.setState({
        listDisappovedPost: data,
      });
    });
  };
  componentDidMount() {
    this.getAllApprovedPost();
    this.getAllPendingPost();
    this.getAllDisapprovedPost();
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
  onApprove = (id) => {
    approvePost(id)
      .then((status) => {
        if (status === 200) {
          toast.success("Duyệt thành công!", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
        this.getAllApprovedPost();
        this.getAllPendingPost();
      })
      .catch((error) => {
        toast.error("Đã xảy ra lỗi", { position: toast.POSITION.BOTTOM_LEFT });
      });
  };
  onDisapprove = (id) => {
    disapprovePost(id)
      .then((status) => {
        if (status === 200) {
          toast.info("Bỏ qua phòng trọ!", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
        this.getAllDisapprovedPost();
        this.getAllPendingPost();
      })
      .catch((error) => {
        toast.error("Đã xảy ra lỗi", { position: toast.POSITION.BOTTOM_LEFT });
      });
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
            <OwnerPost
              ownerPost={post}
              key={index}
              onApprove={this.onApprove}
              onDisapprove={this.onDisapprove}
            />
          ))}
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default ListOwnerPost;
