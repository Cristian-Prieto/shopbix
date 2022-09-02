import { useAppContext } from "../hooks/useAppContext";

export function AddToCart({ product }) {
  const { removeProductFromCart, addProductToCart, cart } = useAppContext();
  const productInCart = cart.find((item) => item.product.id === product.id);

  return (
    <div className="flex place-content-center">
      {productInCart ? (
        <div className="flex items-center gap-4">
          <button
            onClick={() => removeProductFromCart(productInCart)}
            className="mt-auto px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-red-600 hover:text-gray-100 disabled:opacity-30 disabled:hover:bg-white"
          >
            - 1
          </button>
          <span className="flex w-8 font-semibold justify-center">
            {productInCart.count}
          </span>
          <button
            onClick={() => addProductToCart(product)}
            className="mt-auto px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-green-400 hover:text-gray-100 disabled:opacity-30 disabled:hover:bg-white"
          >
            + 1
          </button>
        </div>
      ) : (
        <button
          onClick={() => addProductToCart(product)}
          className="mt-auto px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-yellow-300 disabled:opacity-30 disabled:hover:bg-white"
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
