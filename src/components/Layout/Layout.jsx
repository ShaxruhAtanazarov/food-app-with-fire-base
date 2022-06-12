import React from "react";

// components
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper overflow-x-hidden h-screen flex flex-col">
      <Header />
      <div className="page-content mt-16 md:mt-24 md:px-20 p-4 w-full">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
