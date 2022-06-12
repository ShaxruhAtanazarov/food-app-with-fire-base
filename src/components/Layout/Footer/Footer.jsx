import React from "react";

// components
import { Logo } from "components/Logo";

const Footer = () => {
  return (
    <div className="py-4 flex justify-center items-center flex-col bg-slate-50 mt-auto">
      <Logo section="footer" />

      <p className="capitalize text-lg text-mainColor font-semibold my-2">
        Food Delivery
      </p>
    </div>
  );
};

export default Footer;
