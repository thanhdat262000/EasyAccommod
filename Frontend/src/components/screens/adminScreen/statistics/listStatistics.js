import React, { Component } from "react";
import Statistic from "./statistics";
import "../../../../css/screens/adminScreen/statistics/listStatistics.css";
import { getStatistic } from "../../../../service/admin.service";
class ListStatisticsPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitles: [
        { name: "Bài nhiều lượt xem nhất", isChosen: true },
        { name: "Bài nhiều luợt thích nhất", isChosen: false },
      ],
      listMostViewPost: [{ type: "mostView" }],
      listMostLikePost: [],
    };
  }
  componentDidMount() {
    this.getMostLike();
    this.getMostView();
  }
  getMostView = () => {
    getStatistic().then((data) => {
      this.setState({
        listMostViewPost: data.mostView,
      });
    });
  };
  getMostLike = () => {
    getStatistic().then((data) => {
      this.setState({
        listMostLikePost: data.mostFavorite,
      });
    });
  };
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
    let listStatisticPosts;
    const { listTitles } = this.state;
    const [title] = this.state.listTitles.filter(
      (title) => title.isChosen === true
    );
    switch (title.name) {
      case "Bài nhiều lượt xem nhất":
        listStatisticPosts = this.state.listMostViewPost;
        break;
      case "Bài nhiều luợt thích nhất":
        listStatisticPosts = this.state.listMostLikePost;
        break;
      default:
        break;
    }
    return (
      <div className="list-statistic-posts">
        <div className="statistic-posts-title-list">
          {listTitles.map((title, index) => (
            <div
              className="statistic-posts-title-list-item"
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

        <div className="list-statistic-posts-body">
          {listStatisticPosts.map((post, index) => (
            <Statistic statisticPost={post} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default ListStatisticsPost;
