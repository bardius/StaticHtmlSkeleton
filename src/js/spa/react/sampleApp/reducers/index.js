import { combineReducers } from "redux";
import appState from "./app-state-reducer";

const rootReducer = combineReducers({
    appState
});

export default rootReducer;
