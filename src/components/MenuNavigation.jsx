import "./NavBar.css";
import { NavLink } from "react-router-dom";

export const MenuNavigation = () => {
  return (
    <nav className="NavLinks">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
