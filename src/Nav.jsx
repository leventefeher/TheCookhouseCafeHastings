import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navbar">
      <ul className="flex-container">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};
