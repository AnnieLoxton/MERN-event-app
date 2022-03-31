import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//Import custom CSS
import "./authStyles.css";

//Material-UI components
import { TextField } from "@mui/material";

//Import action creator
import { signIn } from "../../store/actions/authActions";

const SignIn = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  //Sign the user in
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.email, creds.password));
    setCreds({ email: "", password: "" });
  };

  //Redirect to the admin dashboard once user signs in
  if (auth._id) return <Redirect to="/admin" />;

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className="formStyle"
        onSubmit={handleSubmit}
      >
        <h5>Admin Sign In</h5>
        <TextField
          style={{ marginBottom: 16 }}
          id="enter-email"
          label="Enter email"
          variant="outlined"
          fullWidth
          value={creds.email}
          onChange={(e) => setCreds({ ...creds, email: e.target.value })}
        />
        <TextField
          style={{ marginBottom: 16 }}
          id="enter-password"
          type="password"
          label="Enter password"
          variant="outlined"
          fullWidth
          value={creds.password}
          onChange={(e) => setCreds({ ...creds, password: e.target.value })}
        />
        <button type="submit" style={{ marginTop: 16 }} className="submitBtn">
          Sign In
        </button>
      </form>
    </>
  );
};

export default SignIn;
