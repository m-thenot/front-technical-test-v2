import constants from "./constants";
import { CartProduct, Product } from "../types/product";

export function addToCart(product: Product) {
  return {
    type: constants.addToCart,
    product,
  };
}

export function removeFromCart(product: CartProduct) {
  return {
    type: constants.removeFromCart,
    product,
  };
}
