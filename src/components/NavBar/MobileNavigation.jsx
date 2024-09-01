import { NavLinks } from "./NavLinks";
import "./NavBar.css";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useState } from "react";
import { Logo } from "../Logo";

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
      <Logo />
      {click && <NavLinks isClicked={true} closeMenu={closeMenu} />}
      {click ? Close : Hamburger}
    </nav>
  );
};
