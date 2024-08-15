import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavLinks = ({ isClicked, closeMenu }) => {
  return (
    <nav className="NavLinks">
      <ul>
        <li onClick={() => isClicked && closeMenu()}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <Link to="/menu">Menu</Link>
        </li>
        <li onClick={() => isClicked && closeMenu()}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
