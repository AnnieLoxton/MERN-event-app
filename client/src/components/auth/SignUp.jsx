import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//Import custom CSS
import "./authStyles.css";

//Import Material UI components
import { TextField } from "@mui/material";

//Import action creator
import { signUp } from "../../store/actions/authActions";

const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  //Setting the state
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  //Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    setUser({ name: "", email: "", password: "" });
  };

  //Redirect to the admin dashboard once admin user has signed up.
  if (auth._id) return <Redirect to="/admin" />;

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        className="formStyle"
        onSubmit={handleSubmit}
      >
        <h5>Admin Sign Up</h5>
        <TextField
          style={{ marginBottom: 16 }}
          id="enter-name"
          label="Enter name"
          variant="outlined"
          fullWidth
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <TextField
          style={{ marginBottom: 16 }}
          id="enter-email"
          label="Enter email"
          variant="outlined"
          fullWidth
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <TextField
          style={{ marginBottom: 16 }}
          id="enter-password"
          type="password"
          label="Enter password"
          variant="outlined"
          fullWidth
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button type="submit" style={{ marginTop: 16 }} className="submitBtn">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignUp;
