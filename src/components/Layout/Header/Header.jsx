import React from "react";

// components
import MobileMenu from "./components/MobileMenu";
import DesktopAndTabletMenu from "./components/DesktopAndTabletMenu";
import { Cart } from "components/Cart";
import { useStateValue } from "store/StateProvider";

const Header = () => {
  const [{ isCartOpen }, dispatch] = useStateValue();

  return (
    <header className="fixed align-center z-50 w-full p-4 md:px-16 bg-headerBg">
      {/* desktop & tablet======================== */}
      <DesktopAndTabletMenu />
      {/* mobile================================== */}
      <MobileMenu />
      {isCartOpen && <Cart />}
    </header>
  );
};

export default Header;
