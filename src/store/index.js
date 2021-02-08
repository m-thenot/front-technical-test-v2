import { createStore, compose } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { rootReducer } from "./../reducers";

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production" && typeof window === "object") {
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}

const enhancers = [];

// create a makeStore function
const makeStore = (context) =>
  createStore(rootReducer, composeEnhancers(...enhancers));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
