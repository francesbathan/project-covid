import React from "react";
import { navigate } from "@reach/router";
import { Button, makeStyles, TextField } from "@material-ui/core";
import "./search.css";

const useStyles = makeStyles(theme => ({
  inputField: {
    marginTop: "5vh",
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
    marginTop: "2vh",
    marginLeft: "auto"
  }
}));

function SearchBar() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <TextField
          className={classes.inputField}
          variant="outlined"
          label="Search by zip or city"
          type="search"
          id="standard-search"
          color="secondary"
          InputProps={{ className: classes.colorChange }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          className={classes.searchBtn}
          onClick={() => navigate("/testing-centers")}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchBar;
