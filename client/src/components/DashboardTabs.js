import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  active: {
    color: "red"
  },
  inactive: {
    color: "black"
  }
}));

function DashboardTabs(props) {
  const { setTesting, setApproved, testing, approved } = props;

  const classes = useStyles();

  const showTesting = () => {
    setTesting(true);
    setApproved(false);
  };

  const showApproved = () => {
    setTesting(false);
    setApproved(true);
  };

  return (
    <div>
      <Button
        onClick={() => showTesting()}
        className={testing ? classes.active : classes.inactive}
      >
        For Approval
      </Button>
      <Button
        onClick={() => showApproved()}
        className={approved ? classes.active : classes.inactive}
      >
        Approved
      </Button>
    </div>
  );
}
export default DashboardTabs;
