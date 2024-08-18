import { NavLinks } from "./NavLinks";
import "./NavBar.css";

export const DesktopNavigation = () => {
  return (
    <nav className="DesktopNavigation">
      <a href="/" id="text" className="hideLinkDecoration">
        <span id="THE">THE</span>
        <span id="COOKHOUSE">COOKHOUSE</span>
        <span id="CAFE">CAFÉ</span>
      </a>
      <NavLinks />
    </nav>
  );
};
