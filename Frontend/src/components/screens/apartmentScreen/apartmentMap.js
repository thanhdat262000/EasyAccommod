import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
require("dotenv").config();
class ApartmentMap extends Component {
  state = {};
  render() {
    return (
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP_API_KEY}>
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            paddingTop: "100%",
            marginTop: "30px",
          }}
          zoom={10}
          center={{ lat: 21.027763, lng: 105.83416 }}
        ></GoogleMap>
      </LoadScript>
    );
  }
}

export default ApartmentMap;
