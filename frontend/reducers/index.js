import { combineReducers } from "redux";
import noteReducer from "./noteReducer.js";

const reducers = combineReducers({
  notes: noteReducer,
});

export default reducers;
