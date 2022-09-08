import React from 'react';
import PropTypes from 'prop-types';
import styles from './Map.module.css'
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from 'react';

const Map = () => {
  const initialMarkers = [
      {
          position: {
              lat: 28.625485,
              lng: 79.821091
          },
          label: { color: "white", text: "P1" },
          draggable: true
      },
      {
          position: {
              lat: -29.4125568,
              lng: -66.8663808
          },
          label: { color: "white", text: "P2" },
          draggable: false
      },
      {
          position: {
              lat: 28.625182,
              lng: 79.81464
          },
          label: { color: "white", text: "P3" },
          draggable: true
      },
  ];
  
  const [activeInfoWindow, setActiveInfoWindow] = useState("");
  const [markers, setMarkers] = useState(initialMarkers);

  const containerStyle = {
      width: "600px",
      height: "100%",
  }

  const center = {
    lat: 28.625485,
      lng: 79.821091
  }

  const mapClicked = (event) => { 
      console.log(event.latLng.lat(), event.latLng.lng()) 
  }

  const markerClicked = (marker, index) => {  
      setActiveInfoWindow(index)
      console.log(marker, index) 
  }

  const markerDragEnd = (event, index) => { 
      console.log(event.latLng.lat())
      console.log(event.latLng.lng())
  }

  return (
      <LoadScript googleMapsApiKey='AIzaSyBnzqO8MlEAXIz4Fv1IYJgpVVBC6uYpHMY'>
          <GoogleMap 
              mapContainerStyle={containerStyle} 
              center={initialMarkers[1].position} 
              zoom={15}
              onClick={mapClicked}
          >
              <Marker position={initialMarkers[1].position} />
          </GoogleMap>
      </LoadScript>
  );
};

Map.propTypes = {};

Map.defaultProps = {};

export default Map;
