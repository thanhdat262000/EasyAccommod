import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../css/screens/apartmentScreen/mainApartment.css";
import ApartmentInfo from "./apartmentInfo";
import CarouselApartment from "./Carousel";
class ApartmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main-apartment">
        <div className="main-layout">
          <CarouselApartment />
          <ApartmentInfo />
        </div>
        {/* <CarouselApartment /> */}
      </div>
    );
  }
}

export default ApartmentDetails;
