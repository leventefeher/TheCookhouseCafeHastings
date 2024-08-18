import "./NavBar.css";
import { NavLink } from "react-router-dom";

export const NavLinks = ({ isClicked, closeMenu }) => {
  return (
    <nav className="NavLinks">
      <ul>
        <li onClick={() => isClicked && closeMenu()}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
