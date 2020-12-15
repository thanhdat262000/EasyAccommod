import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../css/screens/apartmentScreen/mainApartment.css";
import ApartmentMap from "./apartmentMap";
import ApartmentOwnerInfo from "./apartmentOwnerInfo";
import ListApartmentProperties from "./apartmentPropertiesInfo/listApartmentProperties";
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
          <div className="main-layout-body">
            <div className="main-layout-body-info">
              <ApartmentOwnerInfo />
              <ListApartmentProperties />
            </div>
            <div className="main-layout-body-advancedInfo">
              {" "}
              <ApartmentMap />
            </div>
          </div>
        </div>
        {/* <CarouselApartment /> */}
      </div>
    );
  }
}

export default ApartmentDetails;
