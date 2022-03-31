import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Import custom CSS
import "./NavBar.css";

//Import react router dom components
import { useHistory } from "react-router-dom";

//Import action creator
import { signOut } from "../../store/actions/authActions";

const NavBar = () => {
  const state = useSelector((state) => state);
  const auth = useSelector((state) => state.auth);
  console.log(state);

  const history = useHistory();

  const dispatch = useDispatch();

  //function to sign out
  const handleSignOut = () => {
    //sign out user
    dispatch(signOut());
    history.push("/signin");
  };
  return (
    <>
      <div className="navBar">
        <div className="navContents">
          <div style={{ backgroundColor: "white" }}>
            <a href="/">
              <h3>TV</h3>
            </a>
          </div>
          <div className="navLinks">
            {auth._id ? (
              <>
                <a href="/admin">
                  <button className="signUpBtn">Manage events</button>
                </a>

                <button className="signInBtn" onClick={() => handleSignOut()}>
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <a href="/signin">
                  <button className="signInBtn">Admin Sign In</button>
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
