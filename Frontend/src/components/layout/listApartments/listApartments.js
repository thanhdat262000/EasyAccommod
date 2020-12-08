import React, { Component } from "react";
import Apartment from "./apartment";
import "../../../css/listApartments.css";
class ListApartments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listApartments: [
        {
          id: 1,
          imagePath: "https://picsum.photos/200/300",
          rentPrice: "10,000,000",
          address: "Quận Cầu Giấy",
        },
        {
          id: 2,
          imagePath: "https://picsum.photos/200/300",
          rentPrice: "10,000,000",
          address: "Quận Hai Bà Trưng",
        },
        {
          id: 3,
          imagePath: "https://picsum.photos/200/300",
          rentPrice: "10,000,000",
          address: "Quận Long Biên",
        },
        {
          id: 4,
          imagePath: "https://picsum.photos/200/300",
          rentPrice: "10,000,000",
          address: "Quận Cầu Giấy",
        },
        {
          id: 5,
          imagePath: "https://picsum.photos/200/300",
          rentPrice: "10,000,000",
          address: "Quận Cầu Giấy",
        },
        {
          id: 6,
          imagePath: "https://picsum.photos/200/300",
          rentPrice: "10,000,000",
          address: "Quận Cầu Giấy",
        },
        {
          id: 7,
          imagePath: "https://picsum.photos/200/300",
          rentPrice: "10,000,000",
          address: "Quận Cầu Giấy",
        },
        {
          id: 8,
          imagePath: "https://picsum.photos/200/300",
          rentPrice: "10,000,000",
          address: "Quận Cầu Giấy",
        },
        {
          id: 9,
          imagePath: "https://picsum.photos/200/300",
          rentPrice: "10,000,000",
          address: "Quận Cầu Giấy",
        },
      ],
    };
  }
  render() {
    const { listApartments } = this.state;
    return (
      <div className="list-apartments">
        {listApartments.map((apartment, index) => (
          <Apartment apartmentInfo={apartment} key={index} />
        ))}
      </div>
    );
  }
}

export default ListApartments;
