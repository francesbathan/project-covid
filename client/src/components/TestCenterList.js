import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";

import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "15vh 2vw",
    padding: "1vh 2vw 5vh 2vw"
  },
  content: {
    fontSize: "11pt",
    margin: "1vh auto"
  },
  info: {
    margin: "4vh auto"
  }
}));

function TestingTable() {
  const [testingCenter, setTestingCenter] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/alltestcenters")
      .then(res => {
        setTestingCenter(res.data);
      })
      .catch(console.log);
  }, []);

  const classes = useStyles();

  const approved = testingCenter.filter(
    testingCenter => testingCenter.status === 1
  );

  return (
    <>
      <Paper className={classes.paper}>
        <h2>Testing Centers</h2>

        {approved.map((testingCenter, i) => {
          return (
            <div key={i} className={classes.info}>
              <h4 className={classes.content}>{testingCenter.hospital}</h4>
              <p className={classes.content}>
                {testingCenter.addressOne},{testingCenter.addressTwo}
              </p>
              <p className={classes.content}>
                {testingCenter.city}, {testingCenter.state} {testingCenter.zip}
              </p>
            </div>
          );
        })}
      </Paper>
    </>
  );
}
export default TestingTable;
