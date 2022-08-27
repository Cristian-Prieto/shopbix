import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";
import { BsFillTrashFill } from "react-icons/bs";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

export function Cart({ toggleMenu }) {
  const { cart, removeProductFromCart, addProductToCart } = useAppContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalProducts = cart.reduce(
    (accumulator, totalProducts) => accumulator + totalProducts.count,
    0
  );
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
  const renderCartBtn = (isMobile) => {
    return (
      <>
        {!isMobile && (
          <div className="flex place-content-center bg-yellow-300 rounded-full w-12 px-4 py-1">
            {totalProducts}
          </div>
        )}

        <BsFillCartFill className=" h-6 w-6 " />
      </>
    );
  };
  return (
    <div className="flex relative z-10">
      <Link
        to="/cart"
        className="flex sm:hidden relative place-items-center justify-center align-middle gap-2 z-10  w-full"
      >
        {renderCartBtn(true)}
      </Link>
      <button
        className="hidden sm:flex  relative place-items-center justify-center align-middle gap-2 z-10"
        onClick={() => {
          window.scrollTo(0, 0);
          setIsCartOpen((prevState) => !prevState);
        }}
      >
        {renderCartBtn(false)}
      </button>
      {isCartOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen"
            onClick={() => setIsCartOpen(false)}
          />
          {cart.length > 0 ? (
            <ul className="fixed hidden sm:block top-20 right-0 w-screen  md:w-1/2 md:right-4 space-y-2 backdrop-blur-md shadow-xl rounded-b-lg bg-white/30">
              <Link
                className="flex justify-center place-items-center  p-4 w-full backdrop-blur-md bg-yellow-300 hover:bg-yellow-200"
                to="/cart"
                onClick={() => toggleMenu()}
              >
                Go to cart
              </Link>
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
