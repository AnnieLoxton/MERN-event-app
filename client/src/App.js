import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Import custom css
import "./App.css";

//Import React Boostrap styles
import "bootstrap/dist/css/bootstrap.min.css";

//Import components
import Landing from "./components/user/landing/Landing";
import Events from "./components/adminEvents/events/Events";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

//Import action creator
import { loadUser } from "./store/actions/authActions";

//Import toastify component
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <div>
          <Switch>
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/admin" component={Events} />
            <Route path="/" component={Landing} />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
