import React from "react";

// components
import { Logo } from "components/Logo";
import Basket from "./Basket";
import Avatar from "./Avatar";

const MobileMenu = () => {
  return (
    <div className="flex items-center justify-between md:hidden w-full h-full">
      <Basket />
      <Logo />
      <Avatar />
    </div>
  );
};

export default MobileMenu;
