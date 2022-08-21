import { useAppContext } from "../hooks/useAppContext";

export const Product = ({ product }) => {
  const { removeProductFromCart, addProductToCart, cart } = useAppContext();
  const alreadyExist = cart.find((item) => item.product.id === product.id);

  return (
    <li
      key={product.id}
      className="flex flex-col shadow-lg hover:shadow-xl transition rounded-lg bg-white"
    >
      <div className="h-96 rounded-t-lg overflow-hidden bg-gray-100">
        <img
          src={
            product.images.length && product.images[0]
              ? product.images[0]
              : "https://via.placeholder.com/150"
          }
          alt={product.title}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="flex flex-1 flex-col items-center  p-4">
          <h3 className="font-bold text-lg mb-4  text-gray-900">
            {product.title}
          </h3>
          <p className=" text-center text-gray-500">{product.description}</p>
        </div>

        <span className="mt-2 mb-8 text-gray-900">${product.price}</span>
        {alreadyExist ? (
          <div className="flex gap-8">
            <button
              onClick={() => removeProductFromCart(alreadyExist)}
              className="mt-auto px-4 py-2 uppercase shadow-md rounded-xl bg-white transition hover:bg-red-600 hover:text-gray-100 disabled:opacity-30 disabled:hover:bg-white"
            >
              - 1
            </button>
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
    </li>
  );
};
