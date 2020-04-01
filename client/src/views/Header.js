import React from "react";
import logo from "../assets/logo.png";
import { Button, makeStyles, Grid } from "@material-ui/core";
import "./header.css";
import { navigate } from "@reach/router";

function Header() {
  const useStyles = makeStyles(theme => ({
    root: {
      margin: "2vh auto"
    }
  }));

  const classes = useStyles();

  return (
    <>
      <a href="/">
        <img src={logo} className="logo" alt="project covid logo" />
      </a>

      <Grid container spacing={2} className={classes.root} justify="center">
        <Grid item>
          <Button onClick={() => navigate("/")}>Home</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate("/testing-centers")}>
            Testing Centers
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate("/submit")}>
            Submit A Testing Center
          </Button>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate("/resources")}>Resources</Button>
        </Grid>
        <Grid item>
          <Button onClick={() => navigate("/donate")}>Where To Donate</Button>
        </Grid>
      </Grid>
    </>
  );
}
export default Header;
