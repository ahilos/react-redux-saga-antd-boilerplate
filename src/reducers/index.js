import { combineReducers } from "redux";
import authReducer from "./authReducer";

const appReducer = asyncReducers =>
  combineReducers({
    authentication: authReducer,
    ...asyncReducers
  });

function rootReducer(asyncReducers) {
  return appReducer(asyncReducers);
}

export default rootReducer;
