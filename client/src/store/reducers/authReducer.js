//Import Toast component
import { toast } from "react-toastify";

//Import jwt decode to decode token
import jwtDecode from "jwt-decode";

//Setting the initial state of the app
const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  _id: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOADED":
    case "SIGN_IN":
    case "SIGN_UP":
      const user = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        name: user.name,
        email: user.email,
        _id: user._id,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      toast("Signed out", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return {
        token: null,
        name: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};

export default authReducer;
