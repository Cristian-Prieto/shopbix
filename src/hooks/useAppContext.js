import { useContext } from "react";
import { AppContext } from "../context";

export const useAppContext = () => {
  const { cart, user, addProductToCart, removeProductFromCart } =
    useContext(AppContext);

  return { cart, user, addProductToCart, removeProductFromCart };
};
