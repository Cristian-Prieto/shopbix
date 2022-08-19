import { createContext, useEffect, useState } from "react";

const INITIAL_CONTEXT = {
  cart: [],
  user: { name: "cris" },
};

export const AppContext = createContext();

const AppContextComponent = ({ children }) => {
  const [state, setState] = useState(INITIAL_CONTEXT);

  const addProductToCart = (product) => {
    setState((prevState) => ({
      ...prevState,
      cart: [...prevState.cart, product],
    }));
  };

  return (
    <AppContext.Provider
      value={{
        cart: state.cart,
        user: state.user,
        addProductToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
