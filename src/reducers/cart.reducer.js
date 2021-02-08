/* eslint-disable no-param-reassign */
import constants from "../actions/constants";
import produce from "immer";

const initialState = {
  products: {},
  count: 0,
};

const cartReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      /* ADD PRODUCT TO CART */
      case constants.addToCart:
        draft.products = {
          ...state.products,
          [action.product.objectID]: action.product,
        };
        draft.count = state.count + 1;
        break;

      /* REMOVE PRODUCT FROM CART */
      case constants.removeFromCart:
        const products = { ...state.products };
        delete products[action.product.objectID];
        draft.products = products;
        draft.count = state.count - 1;
        break;
      default:
    }
  });
};
export default cartReducer;
