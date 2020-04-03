import React, { useState } from "react";
import axios from "axios";
import { Paper, TextField, makeStyles, Grid, Button } from "@material-ui/core";
import "./submitcenter.css";
import { navigate } from "@reach/router";

const useStyles = makeStyles(theme => ({
  paper: {
    width: "50vw",
    padding: "5vh 2vw",
    margin: "auto"
  },
  inputField: {
    width: "30vw"
  },
  submitBtn: {
    backgroundColor: "red",
    borderRadius: "40px",
    color: "white",
    marginTop: "3vh",
    width: "7vw"
  },
  errorMsg: {
    color: "red",
    fontSize: "9pt"
  }
}));

function SubmitCenterForm() {
  const classes = useStyles();

  const [hospital, setHospital] = useState("");
  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [errors, setErrors] = useState([]);

  function onSubmitHandler(event) {
    event.preventDefault();

    axios
      .post("http://localhost:8000/api/testcenters/new", {
        hospital,
        addressOne,
        addressTwo,
        city,
        state,
        zip,
        name,
        email,
        comments
      })
      .then(() => navigate("/thank-you"))
      .catch(err => {
        const errorResponse = err.response.data.errors;
        console.log("Error response:", errorResponse);
        console.log(err);
        const errorList = [];
        for (const key of Object.keys(errorResponse)) {
          errorList.push(errorResponse[key].message);
        }
        setErrors(errorList);
      });
  }

  return (
    <Paper className={classes.paper}>
      <form onSubmit={onSubmitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Hospital/Clinic/Testing Center Name *"
              fullWidth
              inputProps={{ className: classes.inputField }}
              value={hospital}
              onChange={e => setHospital(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Address 1 *"
              fullWidth
              inputProps={{ className: classes.inputField }}
              value={addressOne}
              onChange={e => setAddressOne(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Address 2 (Optional)"
              fullWidth
              inputProps={{ className: classes.inputField }}
              value={addressTwo}
              onChange={e => setAddressTwo(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              color="secondary"
              label="City *"
              fullWidth
              inputProps={{ className: classes.inputField }}
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              color="secondary"
              label="State *"
              fullWidth
              inputProps={{ className: classes.inputField }}
              value={state}
              onChange={e => setState(e.target.value)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Zip *"
              fullWidth
              inputProps={{ className: classes.inputField }}
              value={zip}
              onChange={e => setZip(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Your Name *"
              fullWidth
              inputProps={{ className: classes.inputField }}
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Your Email *"
              fullWidth
              inputProps={{ className: classes.inputField }}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Additional Comments (Optional)"
              fullWidth
              inputProps={{ className: classes.inputField }}
              value={comments}
              onChange={e => setComments(e.target.value)}
            />
          </Grid>
        </Grid>
        <div>
          {errors.map((error, index) => (
            <p key={index} className={classes.errorMsg}>
              {error}
            </p>
          ))}
        </div>
        <Button type="submit" className={classes.submitBtn} variant="contained">
          Submit
        </Button>
      </form>
      <p className="disclaimer">
        *Required fields
        <br />
        Submissions are subject to approval.
      </p>
    </Paper>
  );
}
export default SubmitCenterForm;
