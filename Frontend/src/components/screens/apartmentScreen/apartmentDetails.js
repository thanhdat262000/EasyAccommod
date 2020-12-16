import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../css/screens/apartmentScreen/mainApartment.css";
import { favorite, getApartment } from "../../../service/user.service";
import ApartmentFavoriteButton from "./apartmentFavoriteButton";
import ApartmentMap from "./apartmentMap";
import ApartmentOwnerInfo from "./apartmentOwnerInfo";
import ListApartmentProperties from "./apartmentPropertiesInfo/listApartmentProperties";
import ApartmentRateAndComment from "./apartmentRateAndComment";
import CarouselApartment from "./Carousel";
class ApartmentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartmentInfo: {},
    };
  }
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    getApartment(params.id).then((data) => {
      this.setState({
        apartmentInfo: data,
      });
    });
  }
  onFavorite = () => {
    const {
      match: { params },
    } = this.props;
    favorite(params.id).then((status) => {
      if (status === 200) console.log(status);
      else console.log(status);
    });
  };
  render() {
    const { apartmentInfo } = this.state;
    console.log(apartmentInfo);
    return (
      <div className="main-apartment">
        <div className="main-layout">
          <CarouselApartment images={apartmentInfo} />
          <div className="main-layout-body">
            <div className="main-layout-body-info">
              <ApartmentOwnerInfo ownerInfo={apartmentInfo} />
              <ListApartmentProperties info={apartmentInfo} />
            </div>
            <div className="main-layout-body-advancedInfo">
              {" "}
              <ApartmentMap />
              <ApartmentFavoriteButton
                onClick={this.onFavorite}
                isFavorite={apartmentInfo.favorite}
              />
              <ApartmentRateAndComment />
            </div>
          </div>
        </div>
        {/* <CarouselApartment /> */}
      </div>
    );
  }
}

export default ApartmentDetails;
