import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/list">Buy</Link>
      <Link to="/edit">Edit</Link>
    </nav>
  );
}
