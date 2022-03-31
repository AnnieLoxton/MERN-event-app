import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

//Import custom CSS
import "./events.css";

//Import components
import AddEvent from "../add event/AddEvent";
import ListEvents from "../list events/ListEvents";

const Events = () => {
  //Load auth from state
  const auth = useSelector((state) => state.auth);

  //Set up default states
  const [event, setEvent] = useState({
    name: "",
    description: "",
    eventDate: "",
    price: "",
  });

  //Check if user is signed in & redirect if needed
  if (!auth._id) return <Redirect to="/signin" />;

  return (
    <>
      <div className="adminHeader">
        <div className="headerContent">
          <h2>Admin Dashboard</h2>
        </div>
      </div>
      <AddEvent event={event} setEvent={setEvent} />
      <ListEvents setEvent={setEvent} />
    </>
  );
};

export default Events;
