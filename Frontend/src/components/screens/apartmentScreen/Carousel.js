import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "../../../css/screens/apartmentScreen/carousel.css";
import "react-slideshow-image/dist/styles.css";
class CarouselApartment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="carousel-apartment">
        <Slide easing="ease" autoplay="true">
          <div className="each-slide">
            <img
              src="https://picsum.photos/200/300"
              alt="img"
              width="100%"
              height={300}
            />
          </div>
          <div className="each-slide">
            <img
              src="https://picsum.photos/200/300"
              alt="img"
              width="100%"
              height={300}
            />
          </div>
          <div className="each-slide">
            <img
              src="https://picsum.photos/200/300"
              alt="img"
              width="100%"
              height={300}
            />
          </div>
        </Slide>
      </div>
    );
  }
}

export default CarouselApartment;
