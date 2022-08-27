import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Cart } from "./Cart";
import { GrMenu, GrClose } from "react-icons/gr";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    window.scrollTo(0, 0);
    setIsOpen((prevState) => !prevState);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style = "overflow: hidden;";
    }
    return () => {
      document.body.style = "";
    };
  }, [isOpen]);

  return (
    <>
      <div className="flex p-4 h-20 items-center w-full justify-between shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]">
        <h1 className="flex text-4xl font-suez-one w-30 ">ShopBix</h1>
        <div className="relative flex flex-none sm:flex-1">
          <button
            onClick={toggleMenu}
            className="flex flex-col place-content-center text-center h-20 text-xl sm:hidden px-4"
          >
            {isOpen ? <GrClose /> : <GrMenu />}
          </button>

          <nav
            className={`
            fixed left-0 top-20 w-screen h-[calc(100vh-5rem)]
            sm:relative sm:left-auto sm:top-auto sm:w-full sm:h-auto
            sm:flex flex-col sm:flex-row items-center justify-center
            z-20
            text-2xl sm:normal-case sm:text-lg shadow-xl uppercase sm:shadow-none bg-white sm:bg-transparent space-y-20 sm:space-y-0 sm:space-x-8 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "block pointer-events-none  opacity-40"
                  : "block font text-black hover:text-yellow-500 transition"
              }
              to="/"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/list"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "pointer-events-none opacity-40"
                  : "text-black hover:text-yellow-500 transition"
              }
            >
              Buy
            </NavLink>
            <NavLink
              to="/edit"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "pointer-events-none opacity-40"
                  : "text-black hover:text-yellow-500 transition"
              }
            >
              Add product
            </NavLink>
          </nav>
          <Cart handleIsOpen={toggleMenu} />
        </div>
      </div>
    </>
  );
}
