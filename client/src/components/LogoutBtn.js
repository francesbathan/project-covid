import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import { makeStyles } from "@material-ui/core";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";

const useStyles = makeStyles(theme => ({
  logoutBtn: {
    float: "right",
    cursor: "pointer",
    color: "gray",
    marginBottom: "10vh",
    "&:hover": {
      cursor: "pointer",
      color: "red"
    }
  }
}));

function LogoutBtn() {
  const classes = useStyles();

  function handleClick() {
    axios
      .delete("http://localhost:8000/api/admin/logout", {
        withCredentials: true
      })
      .then(() => navigate("/admin"))
      .catch(() => navigate("/admin"));
  }

  return (
    <ExitToAppRoundedIcon className={classes.logoutBtn} onClick={handleClick} />
  );
}
export default LogoutBtn;
