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

export const getCardType = (number) => {
  if (!number) return "";

  if (String(number).startsWith("3")) return "American Express";
  if (String(number).startsWith("4")) return "Visa";
  if (String(number).startsWith("5")) return "MasterCard";
};
