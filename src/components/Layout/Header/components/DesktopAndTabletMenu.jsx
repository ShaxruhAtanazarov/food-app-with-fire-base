import React from "react";

// components
import { Logo } from "components/Logo";
import Nav from "./Nav";
import Basket from "./Basket";
import Avatar from "./Avatar";

const DesktopAndTabletMenu = () => {
  return (
    <div className="md:flex hidden w-full h-full p-4 align-center justify-between">
      <Logo />
      <div className="flex gap-8">
        <Nav />
        <Basket />
        <Avatar />
      </div>
    </div>
  );
};

export default DesktopAndTabletMenu;
