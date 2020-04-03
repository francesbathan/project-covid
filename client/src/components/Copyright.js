import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  copyright: {
    fontSize: "8pt"
  }
}));

const Copyright = () => {
  const classes = useStyles();

  return (
    <p className={classes.copyright}>
      &copy;{new Date().getFullYear()} Copyright Project:Covid, All Rights
      Reserved.
    </p>
  );
};

export default Copyright;
