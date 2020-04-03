import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "3vh 5vw 4vh 5vw"
  },
  link: {
    color: "red",
    textDecoration: "none",
    "&:hover": {
      color: "darkred",
      textDecoration: "none"
    }
  }
}));

function Submitted() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <h2>Thank you!</h2>
        <p>
          Testing centers are still very scarce in the United States.
          <br />
          Your contribution will greatly help in making the list grow bigger and
          making it easier for others to find testing near them.
        </p>
        <p>
          You will receive an email within 48 hours if your submission is
          approved.
        </p>
        <p>
          More testing centers in your area that are not on our list?{" "}
          <a href="/submit" className={classes.link}>
            Add them here.
          </a>
        </p>
        <h3>And while you're here...</h3>
        <p>
          If you're able, please consider donating to{" "}
          <a className={classes.link} href="/donate">
            COVID-19 relief projects
          </a>
          .
        </p>
      </Paper>
    </>
  );
}
export default Submitted;
