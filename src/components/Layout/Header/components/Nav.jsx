import React from "react";
import { Link } from "react-router-dom";

// getting menus list from helpers
import { site_header_menu } from "settings/site-header-menu";

const Nav = () => {
  const menus = Array.from(site_header_menu);

  return (
    <ul className="flex align-center gap-8">
      {menus.map((menu, _i) => (
        <li className="self-center text-base" key={menu.id}>
          <Link
            className="capitalize text-menuColor hover:text-menuHoverColor duration-100 transition-all ease-in-out"
            to={menu.link}
          >
            {menu.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
