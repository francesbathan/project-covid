import React, { useState } from "react";
import WrappedMap from "../components/map";
import MapSearchBar from "../components/mapSearchBar";

const Main = () => {
  const [centerCoordinates, setCenterCoordinates] = useState({
    lat: 34.052235,
    lng: -118.243683
  });

  const coordinatesHandler = latlng => {
    setCenterCoordinates(latlng);
    console.log("coming from main.js");
  };

  return (
    <div
      style={{ width: "90vw", height: "100vh", margin: "auto" }}
      className="App"
    >
      <MapSearchBar coordinatesHandler={coordinatesHandler} />
      <WrappedMap
        googleMapURL={
          "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" +
          process.env.REACT_APP_GOOGLE_API_KEY
        }
        loadingElement={<div style={{ height: "80%" }} />}
        containerElement={<div style={{ height: "80%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        coordinates={centerCoordinates}
      />
    </div>
  );
};
export default Main;
