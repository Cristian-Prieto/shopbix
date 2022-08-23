import { INITIAL_CONTEXT } from "../context";
export const saveToLocalStorage = (cart) => {
  window.localStorage.setItem("shopping", JSON.stringify(cart));
};
export const getCartFromLocalStorage = () => {
  const cartFilled = window.localStorage.getItem("shopping");

  if (cartFilled) {
    const shopping = JSON.parse(cartFilled);

    return shopping;
  }

  return INITIAL_CONTEXT;
};
