import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import DeleteOutlineRoundedIcon from "@material-ui/icons/DeleteOutlineRounded";
import DoneOutlineRoundedIcon from "@material-ui/icons/DoneOutlineRounded";

import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: "2vh 2vw",
    padding: "1vh 2vw 3vh 2vw"
  },
  table: {
    border: "1px solid lightgray",
    fontSize: "10pt",
    margin: "auto"
  },
  label: {
    border: "1px solid lightgray",
    padding: "1vh 1vw",
    margin: 0,
    textAlign: "center"
  },
  content: {
    border: "1px solid lightgray",
    padding: "1vh 1vw",
    margin: 0,
    textAlign: "left"
  }
}));

function TestingTable() {
  const [testingCenter, setTestingCenter] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/testcenters", { withCredentials: true })
      .then(res => {
        setTestingCenter(res.data);
      })
      .catch(() => navigate("/admin"));
  }, []);

  const classes = useStyles();

  const approved = testingCenter.filter(
    testingCenter => testingCenter.status === 1
  );

  return (
    <>
      <Paper className={classes.paper}>
        <h2>Testing Centers</h2>
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.label}>Testing Center Name</th>
              <th className={classes.label}>Address 1</th>
              <th className={classes.label}>Address 2</th>
              <th className={classes.label}>City</th>
              <th className={classes.label}>State</th>
              <th className={classes.label}>Zip</th>
            </tr>
          </thead>
          {approved.map((testingCenter, i) => {
            return (
              <tbody key={i}>
                <tr>
                  <td className={classes.content}>{testingCenter.hospital}</td>
                  <td className={classes.content}>
                    {testingCenter.addressOne}
                  </td>
                  <td className={classes.content}>
                    {testingCenter.addressTwo}
                  </td>
                  <td className={classes.content}>{testingCenter.city}</td>
                  <td className={classes.content}>{testingCenter.state}</td>
                  <td className={classes.content}>{testingCenter.zip}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </Paper>
    </>
  );
}
export default TestingTable;
