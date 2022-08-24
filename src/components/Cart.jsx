import { useState, useEffect } from "react";
import { useAppContext } from "../hooks/useAppContext";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

export function Cart() {
  const { cart, removeProductFromCart, addProductToCart } = useAppContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    // Blocking scroll when Cart "modal" is open.
    if (isCartOpen) {
      document.body.style = "overflow: hidden;";
    }

    // Enabling scroll back on clean-up.
    return () => {
      document.body.style = "";
    };
  }, [isCartOpen]);

  return (
    <div className="relative z-10">
      <button
        className="flex relative place-items-center justify-center align-middle gap-2 z-10"
        onClick={() => setIsCartOpen((prevState) => !prevState)}
      >
        <div className="flex place-content-center bg-yellow-300 rounded-full w-12 px-4 py-1">
          {/* {cart.length} */}
          {cart.reduce(
            (accumulator, totalProducts) => accumulator + totalProducts.count,
            0
          )}

          {/* const totalItems = list.reduce(
    (accumulator, currentNumber) => accumulator + currentNumber.total,
    0
  ); */}
        </div>
        <BsFillCartFill className=" h-6 w-6" />
      </button>
      {isCartOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen"
            onClick={() => setIsCartOpen(false)}
          />
          {cart.length > 0 ? (
            <ul className="fixed top-20 right-0 w-screen  md:w-1/2 md:right-4 space-y-2 backdrop-blur-md shadow-xl rounded-lg bg-white/30">
              {cart.map((item) => (
                <li
                  key={item.product.id}
                  className="flex justify-between place-items-center  p-4 w-full py-2 bg-white/0 hover:bg-white/10 transition duration-300"
                >
                  <span className="flex text-lg text-neutral-800">
                    {item.product.title}
                  </span>
                  <div className="flex place-items-center justify-around align-middle  gap-x-2 w-28 h-12">
                    {item.count === 1 ? (
                      <button onClick={() => removeProductFromCart(item)}>
                        <BsFillTrashFill className="h-6 w-6 hover:drop-shadow-md" />
                      </button>
                    ) : (
                      <button onClick={() => removeProductFromCart(item)}>
                        <AiOutlineMinusCircle className="h-6 w-6 hover:drop-shadow-md" />
                      </button>
                    )}

                    <span className="flex-1 font-semibold text-center ">
                      {item.count}
                    </span>
                    <button onClick={() => addProductToCart(item.product)}>
                      <AiOutlinePlusCircle className="h-6 w-6 hover:drop-shadow-md" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="fixed text-center  top-20 right-0 w-screen md:w-1/2 md:right-4 p-4 space-y-2 backdrop-blur-md shadow-xl rounded-lg bg-yellow-300">
              Your cart is empty.
            </div>
          )}
        </>
      )}
    </div>
  );
}
