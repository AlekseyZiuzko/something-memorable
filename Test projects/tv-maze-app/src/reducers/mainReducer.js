import { combineReducers } from "redux";
import { showsReducer } from "./showsReducer";

const mainReducer = combineReducers({
    shows: showsReducer,
});

export default mainReducer;
