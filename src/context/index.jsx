import { createContext, useState } from "react";

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
    console.log(product);
  };

  const removeProductFromCart = (product) => {
    setState((prevState) => ({
      ...prevState,
      cart: [
        ...prevState.cart.filter(
          (cartItem) => product.title !== cartItem.title
        ),
      ],
    }));
  };
  console.log(state);

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
