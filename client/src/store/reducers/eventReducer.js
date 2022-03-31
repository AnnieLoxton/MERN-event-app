//Import Toast component
import { toast } from "react-toastify";

const eventReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_EVENTS":
      return action.events.data;
    case "GET_USEREVENTS":
      return action.events.data;
    case "ADD_EVENT":
      toast.success("Event successfully added", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [action.event.data, ...state];
    case "UPDATE_EVENT":
      toast.success("Event successfully updated", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.map((event) =>
        event._id === action.event.data._id ? action.event.data : event
      );
    case "DELETE_EVENT":
      toast.success("Event deleted", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return state.filter((event) => event._id !== action.id);
    default:
      return state;
  }
};

export default eventReducer;
