import { NavLinks } from "./NavLinks";
import "./NavBar.css";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";

export const MobileNavigation = () => {
  const [click, setClick] = useState(false);
  const ClickHamburger = () => {
    setClick(!click);
    console.log("Hamburger");
  };
  const Hamburger = (
    <SlMenu
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={ClickHamburger}
    />
  );

  const Close = (
    <VscChromeClose
      className="HamburgerMenu"
      size="30px"
      color="black"
      onClick={ClickHamburger}
    />
  );

  const closeMenu = () => setClick(false);

  return (
    <nav className="MobileNavigation">
      <h2 className="logo">Logo</h2>
      {click ? Close : Hamburger}
      {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
    </nav>
  );
};
