import React, { Component } from "react";
import FavoriteApartment from "./favoriteApartment";
import "../../../css/screens/favoriteApartment/listFavoriteApartments.css";

class ListFavoriteApartments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ListFavoriteApartments: [
        {
          id: 0,
          image: "https://picsum.photos/200/300",
          price: "10 000 000",
          address: "Số 36 Ngõ 1 Phạm Văn Đồng, Mai Dịch...",
          time: "7:45, Th5, 11 thg 9",
        },
        {
          id: 1,
          image: "https://picsum.photos/200/300",
          price: "12 500 000",
          address: "Số 36 Ngõ 8 Trần Quốc Vượng, Mai Dịch...",
          time: "7:45, Th5, 11 thg 9",
        },
        {
          id: 2,
          image: "https://picsum.photos/seed/picsum/200/300",
          price: "5 000 000",
          address: "Số 1 Xuân Thủy, Cầu Giấy...",
          time: "7:45, Th5, 11 thg 9",
        },
        {
          id: 3,
          image: "https://picsum.photos/200/300",
          price: "60 000 000",
          address: "Số 36 Ngõ 1 Phạm Văn Đồng, Mai Dịch...",
          time: "7:45, Th5, 11 thg 9",
        },
        {
          id: 4,
          image: "https://picsum.photos/200/300?grayscale",
          price: "10 000 000",
          address: "Số 36 Ngõ 1 Phạm Văn Đồng, Mai Dịch...",
          time: "7:45, Th5, 11 thg 9",
        },
      ],
    };
    this.onDelete = this.onDelete.bind(this);
  }
  onDelete(item) {
    return () => {
      const index = this.state.ListFavoriteApartments.indexOf(item);
      this.setState({
        ListFavoriteApartments: [
          ...this.state.ListFavoriteApartments.slice(0, index),
          ...this.state.ListFavoriteApartments.slice(index + 1),
        ],
      });
    };
  }
  render() {
    const { ListFavoriteApartments } = this.state;
    return (
      <div className="list-favorite-apartments">
        <div className="list-favorite-apartment-title">
          <span>Danh sách yêu thích</span>
        </div>
        {ListFavoriteApartments.map((favoriteApartment, index) => (
          <FavoriteApartment
            key={index}
            favoriteApartment={favoriteApartment}
            onDelete={this.onDelete(favoriteApartment)}
          />
        ))}
      </div>
    );
  }
}

export default ListFavoriteApartments;
