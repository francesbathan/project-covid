import React from "react";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import logo from "../assets/logo.png";
import "./footer.css";
import { navigate } from "@reach/router";
import Copyright from "../components/Copyright";

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
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={6} className={classes.footerText}>
            <p className="footerLink" onClick={() => navigate("/")}>
              Home
            </p>
            <p
              className="footerLink"
              onClick={() => navigate("/testing-centers")}
            >
              Testing Centers
            </p>
            <p className="footerLink" onClick={() => navigate("/submit")}>
              Submit A Testing Center
            </p>
            <p className="footerLink" onClick={() => navigate("/resources")}>
              Resources
            </p>
            <p className="footerLink" onClick={() => navigate("/donate")}>
              Where To Donate
            </p>
          </Grid>
          <Grid item xs={5}>
            <img
              src={logo}
              className="img"
              alt="logo"
              onClick={() => navigate("/")}
            />

            <p className="aboutUs">
              This is an ongoing collaborative effort to make finding a testing
              center near you easier if you have possible symptoms of COVID-19.
              Due to the current scarcity of testing, we cannot guarantee your
              area will be able to provide one. Please know we are doing our
              best to provide accurate information. Contact your local hospital
              or primary care physician for more information on testing in your
              area.
            </p>
          </Grid>
        </Grid>
      </Paper>
      <Copyright />
    </>
  );
}
export default Footer;
