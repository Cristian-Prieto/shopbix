import { NavLink, useLocation } from "react-router-dom";
import { Location } from "react-router-dom";
export function NavBar() {
  const location = useLocation();
  return (
    <nav className="font-semibold space-x-8">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "pointer-events-none opacity-40"
            : "text-black hover:text-yellow-500 transition"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/list"
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
        className={({ isActive }) =>
          isActive
            ? "pointer-events-none opacity-40"
            : "text-black hover:text-yellow-500 transition"
        }
      >
        Edit
      </NavLink>
    </nav>
  );
}
