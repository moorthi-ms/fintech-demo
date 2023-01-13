import { combineReducers } from "redux";
import { marketValueReducer } from "./reducer";

export default combineReducers({
  marketValue: marketValueReducer,
});
