import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Import custom CSS
import "./Landing.css";

//Import Material-UI components

import UserEvent from "../event/UserEvent";
import { listEvents } from "../../../store/actions/eventActions";

const Landing = ({ setEvent }) => {
  const dispatch = useDispatch();

  //Get events from the state
  const events = useSelector((state) => state.events);

  //Dispatch getEvents
  useEffect(() => {
    dispatch(listEvents());
  }, [dispatch]);

  return (
    <>
      <div className="header">
        <div className="headerContent">
          <h1>
            <span style={{ fontWeight: "500", backgroundColor: "transparent" }}>
              The Venue
            </span>{" "}
            <br /> Event Space
          </h1>
          <p className="largeP">
            The Venue is the best new event space available for hire.
          </p>
        </div>
      </div>

      <div className="eventsContainer">
        <h2>{events.length > 0 ? "Upcoming Events" : "No events scheduled"}</h2>
        <div className="eventsList">
          {events &&
            events.map((event) => {
              return (
                <UserEvent event={event} key={event._id} setEvent={setEvent} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Landing;
