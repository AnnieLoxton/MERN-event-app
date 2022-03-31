import React from "react";

//import redux hook
import { useDispatch } from "react-redux";

//Import custom CSS
import "./addEvent.css";

//Import Material-UI Components
import { TextField } from "@mui/material";

//Import action creator
import { addEvent, updateEvent } from "../../../store/actions/eventActions";

const AddEvent = ({ event, setEvent }) => {
  //Set up dispatch hook
  const dispatch = useDispatch();

  //Prevent page from reloading & sending the event to console.
  const handleSubmit = (e) => {
    e.preventDefault();

    //Adding a new event, use the dispatch hook to call the action creator
    if (event._id) {
      const id = event._id;
      const updatedEvent = {
        name: event.name,
        description: event.description,
        eventDate: event.eventDate,
        price: event.price,
        date: event.date,
        author: event.author,
        uid: event.uid,
      };

      dispatch(updateEvent(updatedEvent, id));
    } else {
      const newEvent = {
        ...event,
        date: new Date(),
      };
      dispatch(addEvent(newEvent));
    }

    //set the state
    setEvent({
      name: "",
      description: "",
      eventDate: "",
      price: "",
    });
  };

  return (
    <>
      <div className="pageContainer">
        <h3 style={{ textAlign: "center" }}>Add New & Edit Events</h3>
        <form
          noValidate
          autoComplete="off"
          className="editFormStyle"
          onSubmit={handleSubmit}
        >
          <TextField
            style={{ marginBottom: 16 }}
            id="enter-event"
            label="Enter event name"
            variant="outlined"
            autoFocus
            fullWidth
            value={event.name}
            onChange={(e) => setEvent({ ...event, name: e.target.value })}
          />
          <TextField
            style={{ marginBottom: 16 }}
            id="enter-description"
            label="Enter event description"
            variant="outlined"
            autoFocus
            fullWidth
            value={event.description}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
          />
          <TextField
            style={{ marginBottom: 16 }}
            id="enter-date"
            label="Enter event date"
            variant="outlined"
            autoFocus
            fullWidth
            value={event.eventDate}
            onChange={(e) => setEvent({ ...event, eventDate: e.target.value })}
          />
          <TextField
            style={{ marginBottom: 16 }}
            id="enter-price"
            label="Enter event price"
            variant="outlined"
            autoFocus
            fullWidth
            value={event.price}
            onChange={(e) => setEvent({ ...event, price: e.target.value })}
          />
          <button type="submit" style={{ marginTop: 16 }} className="editBtn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddEvent;
