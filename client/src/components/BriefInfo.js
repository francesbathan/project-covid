import React from "react";
import { Paper, makeStyles } from "@material-ui/core";
import "./briefinfo.css";
import nyc from "../assets/nyc-red.jpg";

function BriefInfo() {
  const useStyles = makeStyles(theme => ({
    paper: {
      width: "90vw",
      margin: "3vw auto",
      backgroundImage: `url(${nyc})`
    }
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className="about19">
        <h1>What is COVID-19?</h1>
        <p>
          Coronavirus disease (COVID-19) is an infectious disease cause by a
          newly discovered coronavirus.
        </p>
        <p>
          The COVID-19 virus spreads primarily through droplets of saliva or
          discharge from the nose when an infected person coughs or sneezes.
        </p>
        <p>
          At this time, there are no specific vaccines or treatments for
          COVID-19. However, there are many ongoing clinical trials evaluation
          potential treatments. WHO will continue to provide updated information
          as soon as clinical findings become available.
        </p>
        <p>
          We encourage everyone to be well-informed about the COVID-19 virus,
          the disease it causes, and how it spreads. Let us all fight this virus
          together and we will soon get through this.
        </p>
        <p>
          For more information, visit the{" "}
          <a href="/resources" className="resources">
            Resources
          </a>{" "}
          tab.
        </p>
        <p className="source">
          Source:{" "}
          <a
            href="https://www.who.int/health-topics/coronavirus"
            className="who"
          >
            World Health Organization on Coronavirus
          </a>
        </p>
      </div>
    </Paper>
  );
}
export default BriefInfo;
