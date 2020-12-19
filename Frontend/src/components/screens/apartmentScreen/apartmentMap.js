import React, { Component } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
require("dotenv").config();
class ApartmentMap extends Component {
  state = {};
  render() {
    const { width, marginTop, paddingTop } = this.props;
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={{
            width: width,
            paddingTop: paddingTop,
            marginTop: marginTop,
          }}
          zoom={10}
          center={{ lat: 21.027763, lng: 105.83416 }}
        ></GoogleMap>
      </LoadScript>
    );
  }
}

export default ApartmentMap;
