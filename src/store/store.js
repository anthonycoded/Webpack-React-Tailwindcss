import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { AuthReducer } from "./reducers/AuthReducer";

const middleware = [thunk];

const rootReducer = combineReducers({
  auth: AuthReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
