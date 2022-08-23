import { Cart } from "./Cart";
import { NavBar } from "./NavBar";

export function Header() {
  return (
    <div className="flex h-20 w-full p-4 items-center justify-between shadow-[0_7px_29px_0px_rgba(100,100,111,0.2)]">
      <h1 className="flex text-4xl font-suez-one">ShopBix</h1>
      <NavBar />
      <Cart />
    </div>
  );
}
