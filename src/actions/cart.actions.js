import constants from "./constants";

export function addToCart(product) {
  return {
    type: constants.addToCart,
    product,
  };
}

export function removeFromCart(product) {
  return {
    type: constants.removeFromCart,
    product,
  };
}
