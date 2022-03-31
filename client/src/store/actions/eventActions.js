import axios from "axios";
import { url, setHeaders } from "../../api";

//Import Toast component
import { toast } from "react-toastify";

//List all events (normal user view)
export const listEvents = () => {
  return (dispatch) => {
    axios
      .get(`${url}/events/`, setHeaders())
      .then((events) => {
        dispatch({
          type: "GET_USEREVENTS",
          events,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

//List all events (admin view)
export const getEvents = () => {
  return (dispatch) => {
    axios
      .get(`${url}/events/admin`, setHeaders())
      .then((events) => {
        dispatch({
          type: "GET_EVENTS",
          events,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

//Add a new event
export const addEvent = (newEvent) => {
  return (dispatch, getState) => {
    const author = getState().auth.name;
    const uid = getState().auth._id;

    axios
      .post(`${url}/events/admin`, { ...newEvent, author, uid }, setHeaders())
      .then((event) => {
        dispatch({
          type: "ADD_EVENT",
          event,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

//Update an evet
export const updateEvent = (updatedEvent, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/events/admin/${id}`, updatedEvent, setHeaders())
      .then((event) => {
        dispatch({
          type: "UPDATE_EVENT",
          event,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};

//Delete an event
export const deleteEvent = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/events/admin/${id}`, setHeaders())
      .then(() => {
        dispatch({
          type: "DELETE_EVENT",
          id,
        });
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response?.data, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      });
  };
};
