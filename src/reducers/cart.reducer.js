/* eslint-disable no-param-reassign */
import constants from "../actions/constants";
import produce from "immer";

const initialState = {
  products: {},
  count: 0,
  total: {
    defaultPrices: 0,
    discountPrices: 0,
  },
  hasDiscount: false,
};

const cartReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      /* ADD PRODUCT TO CART */
      case constants.addToCart:
        const product = {
          ...action.product,
          discountPrice:
            action.product.salePrice >= 250
              ? 0.5 * action.product.salePrice
              : action.product.salePrice,
        };
        draft.products = {
          ...state.products,
          [action.product.objectID]: product,
        };
        draft.count = state.count + 1;
        draft.total.defaultPrices =
          state.total.defaultPrices + product.salePrice;
        draft.total.discountPrices =
          state.total.discountPrices + product.discountPrice;
        draft.hasDiscount = draft.total.defaultPrices >= 200 ? true : false;
        break;

      /* REMOVE PRODUCT FROM CART */
      case constants.removeFromCart:
        const products = { ...state.products };
        draft.total.defaultPrices =
          state.total.defaultPrices - action.product.salePrice;
        draft.total.discountPrices =
          state.total.discountPrices -
          products[action.product.objectID].discountPrice;
        draft.hasDiscount = draft.total.defaultPrices >= 200 ? true : false;
        delete products[action.product.objectID];
        draft.products = products;
        draft.count = state.count - 1;
        break;
      default:
    }
  });
};
export default cartReducer;
