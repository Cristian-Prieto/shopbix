import { createContext, useState, useEffect } from "react";
import { saveToLocalStorage, getCartFromLocalStorage } from "../utils/utils";

export const INITIAL_CONTEXT = {
  cart: [],
};

export const AppContext = createContext();

const AppContextComponent = ({ children }) => {
  const [state, setState] = useState(getCartFromLocalStorage());

  useEffect(() => {
    saveToLocalStorage(state);
  }, [state]);

  const addProductToCart = (product) => {
    setState((prevState) => {
      const alreadyExist = prevState.cart.find(
        (item) => item.product.id === product.id
      );

      if (alreadyExist) {
        return {
          ...prevState,
          cart: prevState.cart.map((item) => {
            if (item.product.id === product.id) {
              return { ...item, count: item.count + 1 };
            }
            return item;
          }),
        };
      }

      return { ...prevState, cart: [...prevState.cart, { count: 1, product }] };
    });
  };

  const removeProductFromCart = (cartItem) => {
    setState((prevState) => {
      if (cartItem.count === 1) {
        return {
          ...prevState,
          cart: prevState.cart.filter(
            (item) => item.product.id !== cartItem.product.id
          ),
        };
      }

      return {
        ...prevState,
        cart: prevState.cart.map((item) => {
          if (item.product.id === cartItem.product.id) {
            return { ...item, count: item.count - 1 };
          }

          return item;
        }),
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        user: state.user,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
