import React from "react";

//Import Material-UI components
import Card from "@mui/material/Card";

//Import custom CSS
import "./UserEvent.css";

const UserEvent = ({ event, setEvent }) => {
  return (
    <>
      <Card
        className="card"
        sx={{
          width: "450px",
          height: "420px",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0px 9px 29px rgba(0, 0, 0, 0.09)",
          border: "none",
          display: "block",
        }}
      >
        <h3>{event.name}</h3>
        <p>{event.description}</p>

        <div className="cardInfo">
          <hr />
          <div className="eventInfo">
            <p>DATE:</p>
            <p>{event.eventDate}</p>
          </div>

          <div className="eventInfo">
            <p>PRICE:</p>
            <p>R{event.price}</p>
          </div>
        </div>
      </Card>
      <div></div>
    </>
  );
};

export default UserEvent;
