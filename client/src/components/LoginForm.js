import React, { useState } from "react";
import { TextField, makeStyles, Button } from "@material-ui/core";
import { navigate } from "@reach/router";
import axios from "axios";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function onSubmitHandler(event) {
    // event.preventDefault();
    console.log("blyat");
    axios
      .post(
        "http://localhost:8000/api/admin/login",
        {
          username,
          password
        },
        { withCredentials: true }
      )
      .then(() => navigate("/dashboard"))
      .catch(() => setErr("Incorrect login. Try again."));
  }

  const useStyles = makeStyles(theme => ({
    textField: {
      marginBottom: "3vh"
    },
    input: {
      width: "20vw"
    },
    loginBtn: {
      backgroundColor: "red",
      borderRadius: "40px",
      color: "white",
      marginBottom: "10vh",
      width: "7vw"
    },
    h2: {
      marginTop: "10vh"
    }
  }));

  const classes = useStyles();

  return (
    <>
      <h2 className={classes.h2}>Admin Login</h2>
      {err && <p className="errorMsg">{err}</p>}
      <form onSubmit={onSubmitHandler}>
        <div>
          <TextField
            className={classes.textField}
            value={username}
            onChange={e => setUsername(e.target.value)}
            label="Username"
            variant="outlined"
            color="secondary"
            InputProps={{ className: classes.input }}
          />
        </div>

        <div>
          <TextField
            className={classes.textField}
            value={password}
            onChange={e => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            type="password"
            color="secondary"
            InputProps={{ className: classes.input }}
          />
        </div>
        <Button
          onClick={() => onSubmitHandler()}
          variant="contained"
          className={classes.loginBtn}
        >
          Login
        </Button>
      </form>
    </>
  );
}
export default LoginForm;
