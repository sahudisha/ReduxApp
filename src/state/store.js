import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import combineReducers from "./reducers/index";

export const store = legacy_createStore(combineReducers, {}, applyMiddleware(thunk))