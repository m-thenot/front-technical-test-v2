import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import cartReducer from "./cart.reducer";

const combinedReducer = combineReducers({
  cart: cartReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  }
  return combinedReducer(state, action);
};
