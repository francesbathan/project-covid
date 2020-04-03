import React, { useState } from "react";
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { TextField, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  inputField: {
    marginTop: "2vh",

    width: "40vw",
    borderRadius: "40px"
  },
  colorChange: {
    color: "red",
    borderColor: "red",
    borderRadius: "40px"
  },
  searchBtn: {
    backgroundColor: "red",
    borderRadius: "40px",
    color: "white",
    margin: "2vh auto 5vh auto"
  }
}));

const MapSearchBar = ({ coordinatesHandler }) => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });

  const classes = useStyles();

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
            <TextField
              className={classes.inputField}
              variant="outlined"
              color="secondary"
              label="Search by zip or city"
              {...getInputProps({ placeholder: "Search by zip or city" })}
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
      <Button
        variant="contained"
        className={classes.searchBtn}
        onClick={submitHandler}
        type="search"
      >
        Search
      </Button>
    </>
  );
};

export default MapSearchBar;
