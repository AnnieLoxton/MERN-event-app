import React from "react";
import { useDispatch } from "react-redux";

//Import custom CSS
import "./event.css";

//Import Material-UI components
import { Button, ButtonGroup } from "@mui/material";
import { Create, Delete } from "@mui/icons-material";

//Import the action creator
import { deleteEvent } from "../../../store/actions/eventActions";

const Event = ({ event, setEvent }) => {
  const dispatch = useDispatch();

  //Function to update the event
  const handleUpdateClick = () => {
    setEvent(event);

    //Scroll to top of page when button is clicked
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  //Function to delete an event
  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <>
      <div className="manageStyle">
        <div>
          <p className="eventName">{event.name}</p>
          <p className="eventDesc">{event.description}</p>
          <div className="eventDetails">
            <p>DATE: {event.eventDate}</p>
            <p>PRICE: {event.price}</p>
          </div>
        </div>
        <div>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => handleUpdateClick()}>
              <Create color="primary" />
            </Button>
            <Button onClick={() => handleDelete(event._id)}>
              <Delete color="error" />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </>
  );
};

export default Event;
