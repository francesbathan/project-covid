import React, { useState, useEffect } from "react";
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

function Edit({ id }) {
  const classes = useStyles();

  const [testingCenter, setTestingCenter] = useState({});

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

  useEffect(() => {
    axios
      .get(
        "http://localhost:8000/api/testcenters/" + id,
        {
          hospital,
          addressOne,
          addressTwo,
          city,
          state,
          zip,
          name,
          email,
          comments
        },
        {
          withCredentials: true
        }
      )
      .then(res => {
        setHospital(res.data.hospital);
        setAddressOne(res.data.addressOne);
        setAddressTwo(res.data.addressTwo);
        setCity(res.data.city);
        setState(res.data.state);
        setZip(res.data.zip);
        setName(res.data.name);
        setEmail(res.data.email);
        setComments(res.data.comments);
      })
      .catch(errr => console.log(errr));
  }, []);

  function onSubmitHandler(event) {
    event.preventDefault();

    axios
      .put(
        "http://localhost:8000/api/testcenters/" + id + "/update",
        {
          hospital,
          addressOne,
          addressTwo,
          city,
          state,
          zip,
          name,
          email,
          comments
        },
        {
          withCredentials: true
        }
      )
      .then(() => navigate("/dashboard"))
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
      <h2>Update Testing Center</h2>
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
              InputLabelProps={{
                shrink: true
              }}
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
              InputLabelProps={{
                shrink: true
              }}
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
              InputLabelProps={{
                shrink: true
              }}
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
              InputLabelProps={{
                shrink: true
              }}
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
              InputLabelProps={{
                shrink: true
              }}
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
              InputLabelProps={{
                shrink: true
              }}
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
              InputLabelProps={{
                shrink: true
              }}
              disabled
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
              InputLabelProps={{
                shrink: true
              }}
              disabled
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
              InputLabelProps={{
                shrink: true
              }}
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
          Update
        </Button>
      </form>
    </Paper>
  );
}
export default Edit;
