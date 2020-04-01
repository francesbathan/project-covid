import React from "react";
import { Paper, TextField, makeStyles, Grid, Button } from "@material-ui/core";
import "./submitcenter.css";

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
  }
}));

function SubmitCenterForm() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Hospital/Clinic Name"
              fullWidth
              inputProps={{ className: classes.inputField }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Address 1"
              fullWidth
              inputProps={{ className: classes.inputField }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Address 2 (Optional)"
              fullWidth
              inputProps={{ className: classes.inputField }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              color="secondary"
              label="City"
              fullWidth
              inputProps={{ className: classes.inputField }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              color="secondary"
              label="State"
              fullWidth
              inputProps={{ className: classes.inputField }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Zip"
              fullWidth
              inputProps={{ className: classes.inputField }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Your Email"
              fullWidth
              inputProps={{ className: classes.inputField }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              color="secondary"
              label="Additional Comments (Optional)"
              fullWidth
              inputProps={{ className: classes.inputField }}
            />
          </Grid>
        </Grid>
        <Button className={classes.submitBtn} variant="contained">
          Submit
        </Button>
      </form>
      <p className="disclaimer">*Submissions are subject to approval.</p>
    </Paper>
  );
}
export default SubmitCenterForm;
