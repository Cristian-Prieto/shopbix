import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="flex justify-center font-semibold space-x-4">
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
