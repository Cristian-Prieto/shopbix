import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import { AddToCart } from "../components/AddToCart";

export function CartSummary() {
  const { cart } = useAppContext();

  const totalProducts = useMemo(
    () =>
      cart.reduce(
        (accumulator, totalProducts) => accumulator + totalProducts.count,
        0
      ),
    [cart]
  );

  const totalPrice = useMemo(() => {
    return cart.reduce(
      (accumulator, current) =>
        accumulator + current.count * current.product.price,
      0
    );
  }, [cart]);

  return (
    <div className="container max-w-5xl flex flex-col space-y-4 p-4 my-8">
      <div className="flex flex-col sm:flex-row py-4 shadow-lg rounded-lg bg-white ">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-baseline mb-8 mx-4 border-b-2">
            <h1 className="text-lg font-semibold">
              Subtotal ({totalProducts}) items.
            </h1>
            <div>
              <span>TOTAL: $</span>
              <span className="font-bold">{totalPrice}</span>
            </div>
          </div>
          <div className="mx-auto">
            <Link
              to="/cart/payment"
              className="mt-auto px-4 py-2 uppercase shadow-md rounded-xl bg-yellow-300 transition hover:bg-yellow-400"
            >
              Procced to checkout
            </Link>
          </div>
        </div>
      </div>
      <span className="hidden sm:block text-right font-semibold pr-4">
        Price
      </span>
      <div className="shadow-lg rounded-lg bg-white py-4 space-y-4">
        {cart.map((item) => (
          <div key={item.product.id} className="flex flex-col sm:flex-row pl-4">
            <div className="hidden sm:flex h-40 sm:w-auto sm:h-44 rounded-lg overflow-hidden bg-gray-100">
              <img
                src={
                  item.product.images.length && item.product.images[0]
                    ? item.product.images[0]
                    : "https://via.placeholder.com/150"
                }
                alt={item.product.title}
                className="w-full h-full object-center object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col items-center  justify-center p-4">
              <div className="flex w-full justify-between  border-b-2 mb-4">
                <Link to={`/product/${item.product.id}`} className="flex">
                  <h1 className="text-lg overflow-x-hidden  text-black">
                    {item.product.title}
                  </h1>
                </Link>
                <span className="flex text-gray-900">
                  ${item.product.price}
                </span>
              </div>
              <div className="flex mr-auto sm:mr-0 sm:ml-auto mb-auto">
                <AddToCart product={item.product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
