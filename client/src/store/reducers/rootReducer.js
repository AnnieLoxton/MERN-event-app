import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import authReducer from "./authReducer";

//this reducer combines all the other reducers
const rootReducer = combineReducers({
  events: eventReducer,
  auth: authReducer,
});

export default rootReducer;
