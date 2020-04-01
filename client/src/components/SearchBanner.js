import React from "react";
import { Button, makeStyles, TextField } from "@material-ui/core";
import "./banner.css";

const useStyles = makeStyles(theme => ({
  inputField: {
    marginTop: "30vh",
    width: "40vw",
    backgroundColor: "white",
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
    marginTop: "2vh",
    marginLeft: "auto"
  }
}));

function SearchBanner() {
  const classes = useStyles();

  return (
    <div className="banner">
      <div>
        <TextField
          className={classes.inputField}
          variant="outlined"
          label="Search for a testing center near you"
          type="search"
          id="standard-search"
          color="secondary"
          InputProps={{ className: classes.colorChange }}
        />
      </div>
      <div>
        <Button variant="contained" className={classes.searchBtn}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchBanner;
