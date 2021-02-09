import { HYDRATE } from "next-redux-wrapper";
import { combineReducers, AnyAction } from "redux";

import cartReducer, { CartState } from "./cart.reducer";

export interface RootState {
  cart: CartState;
}

const combinedReducer = combineReducers<RootState>({
  cart: cartReducer,
});

export const rootReducer = (
  state: RootState | undefined,
  action: AnyAction
) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    return nextState;
  }
  return combinedReducer(state, action);
};
