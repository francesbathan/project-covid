import React, { useState } from "react";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";

const MapSearchBar = ({ coordinatesHandler }) => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latlng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latlng);
    console.log(value);
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log("coming from submit handler");
    coordinatesHandler(coordinates);
  };

  return (
    <>
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <h2>Find testing centers near you</h2>
            {/* <p>Latitude:{coordinates.lat}</p>
                    <p>Longitude:{coordinates.lng}</p> */}
            <input
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`
              }}
              {...getInputProps({ placeholder: "Your city" })}
            />
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#ffff",
                  cursor: "pointer",
                  width: "40%",
                  margin: "0px auto"
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutoComplete>
      <button onClick={submitHandler}>Search</button>
    </>
  );
};

export default MapSearchBar;
