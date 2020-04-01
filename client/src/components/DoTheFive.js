import React from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import dothefive from "../assets/dothe5.gif";
import whologo from "../assets/whologo.png";
import "./dothefive.css";

function DoTheFive() {
  const useStyles = makeStyles(theme => ({
    paper: {
      width: "90vw",
      margin: "3vw auto"
    },
    grid: {
      padding: "2vw"
    },
    gridItem: {
      textAlign: "left",
      fontSize: "12pt"
    },
    psa: {
      fontSize: "8pt",
      textAlign: "right",
      padding: "2vw"
    }
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid className={classes.grid} container spacing={1}>
        <Grid item xs={5}>
          <img src={dothefive} className="hand" alt="do the five" />
          <h3>Help stop coronavirus</h3>
        </Grid>
        <Grid item xs={5} className={classes.gridItem}>
          <h1>DO THE FIVE</h1>
          <p>
            <span className="num">1</span>
            <span className="subtitle">HANDS</span>Wash them often
          </p>
          <p>
            <span className="num">2</span>
            <span className="subtitle">ELBOW</span>Cough into it
          </p>
          <p>
            <span className="num">3</span>
            <span className="subtitle">FACE</span>Don't touch it
          </p>
          <p>
            <span className="num">4</span>
            <span className="subtitle">SPACE</span>Keep safe distance
          </p>
          <p>
            <span className="num">5</span>
            <span className="subtitle">HOME</span>Stay if you can
          </p>
        </Grid>
        <Grid item xs={2} className={classes.psa}>
          <p className="psa">Public Service Announcement</p>
          <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">
            <img src={whologo} className="whologo" alt="who logo" />
          </a>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DoTheFive;
