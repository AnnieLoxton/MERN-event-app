import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Import custom CSS
import "./listEvents.css";

import Event from "../event/Event";

//Import action creator
import { getEvents } from "../../../store/actions/eventActions";

const ListEvents = ({ setEvent }) => {
  const dispatch = useDispatch();

  //Get existing events from the state
  const events = useSelector((state) => state.events);

  //Dispatch getEvents to perform GET request
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <>
      <h3 style={{ textAlign: "center" }}>View & Manage Events</h3>
      <div className="listEventStyle">
        <h5>{events.length > 0 ? "" : "No events yet"}</h5>
        {events &&
          events.map((event) => {
            return <Event event={event} key={event._id} setEvent={setEvent} />;
          })}
      </div>
    </>
  );
};

export default ListEvents;
