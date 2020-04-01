import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import logo from "../assets/logo.png";
import "./footer.css";

function Footer() {
  const useStyles = makeStyles(theme => ({
    footerText: {
      fontSize: "8pt"
    },
    root: {
      flexGrow: 1
    },
    paper: {
      margin: "2vw",
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={6} className={classes.footerText}>
          <a className="footerLink" href="/">
            Home
          </a>
          <a className="footerLink" href="/testing-centers">
            Testing Centers
          </a>
          <a className="footerLink" href="/submit">
            Submit A Testing Center
          </a>
          <a className="footerLink" href="/resources">
            Resources
          </a>
          <a className="footerLink" href="/donate">
            Where To Donate
          </a>
        </Grid>
        <Grid item xs={5}>
          <a href="/">
            <img src={logo} className="img" alt="logo" />
          </a>
          <p className="aboutUs">
            This is an ongoing collaborative effort to make finding a testing
            center near you easier if you have possible symptoms of COVID-19.
            Due to the current scarcity of testing, we cannot guarantee your
            area will be able to provide one. Please know we are doing our best
            to provide accurate information. Contact your local hospital or
            primary care physician for more information on testing in your area.
          </p>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default Footer;
