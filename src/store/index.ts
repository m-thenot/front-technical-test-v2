import { createStore, compose } from "redux";
import { rootReducer, RootState } from "./../reducers";
import { MakeStore, createWrapper } from "next-redux-wrapper";

let composeEnhancers = compose;

if (process.env.NODE_ENV !== "production" && typeof window === "object") {
  if (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"])
    composeEnhancers = window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"];
}

const enhancers = [];

// create a makeStore function
const makeStore: MakeStore<RootState> = () =>
  createStore(rootReducer, composeEnhancers(...enhancers));

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
