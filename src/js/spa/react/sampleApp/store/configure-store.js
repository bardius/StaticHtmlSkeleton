import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import initialState from "./initial-state";

const composeEnhancers = composeWithDevTools({
    name: "app",
    actionsBlacklist: ["REDUX_STORAGE_SAVE"]
});

const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));

export default function configureStore() {
    return createStore(rootReducer, initialState, enhancer);
}
