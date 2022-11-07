import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const middleware = [thunk];
const makeStore = createStore(
  rootReducer,
  { uploadStatus: false },
  compose(applyMiddleware(...middleware))
);
export const store = makeStore;
