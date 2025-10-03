import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";

/* No 3  and 4 will result same
This relies on module resolution rules:
If you just give './action-creators', Node/webpack/Vite will automatically look for: 
    ./action-creators.js
    ./action-creators/index.js
So if there’s an index.js inside the action-creators folder, it works the same as writing ./action-creators/index. */

// import combineReducers from "./reducers";
import combineReducers from "./reducers/index";

export const store = legacy_createStore(combineReducers, {}, applyMiddleware(thunk))