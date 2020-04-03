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
  },
  icons: {
    color: "black",
    "&:hover": { color: "red", cursor: "pointer" }
  },
  deleteIcon: {
    color: "gray",
    "&:hover": { color: "red", cursor: "pointer" }
  }
}));

function TestingTable({ setApproved, setTesting }) {
  const [testingCenter, setTestingCenter] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/testcenters", { withCredentials: true })
      .then(res => {
        setTestingCenter(res.data);
      })
      .catch(() => navigate("/admin"));
  }, []);

  function swapViews() {
    setApproved(true);
    setTesting(false);
  }

  function rejectTestingCenter(id) {
    axios
      .delete("http://localhost:8000/api/testcenters/" + id)
      .then(() => {
        setTestingCenter(
          testingCenter.filter(testingCenter => testingCenter._id !== id)
        );
      })
      .catch(console.log);
  }

  function updateTestingCenter(id, statusCode) {
    axios
      .put("http://localhost:8000/api/testcenters/" + id + "/update", {
        status: statusCode
      })
      .then(() => swapViews());
    // .then(() => navigate("/dashboard"));
  }

  const forApproval = testingCenter.filter(
    testingCenter => testingCenter.status === 0
  );
  const approved = testingCenter.filter(
    testingCenter => testingCenter.status === 1
  );

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <h2>For Approval</h2>
        <table className={classes.table}>
          <thead>
            <tr>
              <th className={classes.label}>Testing Center Name</th>
              <th className={classes.label}>Address 1</th>
              <th className={classes.label}>Address 2</th>
              <th className={classes.label}>City</th>
              <th className={classes.label}>State</th>
              <th className={classes.label}>Zip</th>
              <th className={classes.label}>Submitter Name</th>
              <th className={classes.label}>Submitter Email</th>
              <th className={classes.label}>Comments</th>
              <th className={classes.label}>Date Submitted</th>
              <th className={classes.label}>Action</th>
            </tr>
          </thead>
          {forApproval.length > 0
            ? forApproval.map((testingCenter, i) => {
                return (
                  <tbody key={i}>
                    <tr>
                      <td className={classes.content}>
                        {testingCenter.hospital}
                      </td>
                      <td className={classes.content}>
                        {testingCenter.addressOne}
                      </td>
                      <td className={classes.content}>
                        {testingCenter.addressTwo}
                      </td>
                      <td className={classes.content}>{testingCenter.city}</td>
                      <td className={classes.content}>{testingCenter.state}</td>
                      <td className={classes.content}>{testingCenter.zip}</td>
                      <td className={classes.content}>{testingCenter.name}</td>
                      <td className={classes.content}>{testingCenter.email}</td>
                      <td className={classes.content}>
                        {testingCenter.comments}
                      </td>
                      <td className={classes.content}>
                        {new Date(testingCenter.createdAt).toDateString()}
                      </td>
                      <td className={classes.content}>
                        <DoneOutlineRoundedIcon
                          fontSize="small"
                          className={classes.icons}
                          onClick={() =>
                            updateTestingCenter(testingCenter._id, 1)
                          }
                        />{" "}
                        |{" "}
                        <DeleteOutlineRoundedIcon
                          className={classes.deleteIcon}
                          fontSize="small"
                          onClick={() => {
                            rejectTestingCenter(testingCenter._id);
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                );
              })
            : "No testing centers for approval."}
        </table>
      </Paper>
    </>
  );
}
export default TestingTable;
