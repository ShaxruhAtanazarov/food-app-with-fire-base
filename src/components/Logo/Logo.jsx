import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

// logos
import logo from "assets/images/logo/logo.png";

const Logo = ({ section = "header" }) => {
  const isMobil = useMediaQuery({
    query: "(max-width:768px)",
  });

  if (section === "header") {
    return (
      <Link className="flex items-center" to={"/"}>
        <img className="w-10 object-contain" src={logo} alt="logo" />
        {isMobil ? null : (
          <h2 className="pl-2 font-medium text-xl" style={{ color: "#ec4640" }}>
            Food
          </h2>
        )}
      </Link>
    );
  }

  if (section === "footer") {
    return (
      <Link className="w-10 flex items-center" to={"/"}>
        <img className="w-full object-cover" src={logo} alt="logo" />
      </Link>
    );
  }
};

export default Logo;
