import React from "react";
import PropTypes from "prop-types";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { useState } from "react";
import "./Map.css"

function Map (props) {
  const [activeInfoWindow, setActiveInfoWindow] = useState("");

  const containerStyle = {
    width: "100%",
    height: "25rem",
  };

  const mapClicked = (event) => {
    console.log(event.latLng.lat(), event.latLng.lng());
  };

  const markerClicked = (marker, index) => {
    setActiveInfoWindow(index);
    console.log(marker, index);
  };

  const markerDragEnd = (event, index) => {
    console.log(event.latLng.lat());
    console.log(event.latLng.lng());
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBnzqO8MlEAXIz4Fv1IYJgpVVBC6uYpHMY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: parseFloat(props.position.latitude), lng: parseFloat(props.position.longitude)}}
        zoom={16}
        onClick={mapClicked}
        >
        <Marker
          position={{lat: parseFloat(props.position.latitude), lng: parseFloat(props.position.longitude)}}
          icon="https://s3.amazonaws.com/console.rhebus.works/red_dot.png"
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
