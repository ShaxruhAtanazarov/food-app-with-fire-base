import { get } from "lodash";
import React, { useState } from "react";

// hooks
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useStateValue } from "store/StateProvider";
import useLogin from "hook/useLogin";

// getting menus list from helpers
import { site_header_menu } from "settings/site-header-menu";

// actions
import { action_type } from "store/actions";

// animation
import { motion } from "framer-motion";

//  icons
import { IoIosAdd } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import avatar from "assets/images/avatar/avatar.png";

const Avatar = () => {
  const menus = Array.from(site_header_menu);

  // menu open-close state
  const [isOpen, setIsOpen] = useState(false);

  // getting datas from store
  const [{ user }, dispatch] = useStateValue();

  // getting avatar from store data
  const userAvatar = get(user, "photoURL", avatar);
  
  const navigate = useNavigate();
  const { login } = useLogin();


  // handling login events
  const handleLogin = async () => {
    if (!user) {
      login();
    } else {
      setIsOpen(!isOpen);
    }
  };

  // handling logout events
  const logout = () => {
    setIsOpen(false);
    localStorage.clear();

    dispatch({
      type: action_type.SET_USER,
      user: null,
    });
  };

  // getting viewport desmissions
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // handling menu items
  const handleItem = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const itemClassName = `capitalize text-menuColor flex items-center justify-between hover:text-menuHoverColor hover:bg-slate-100 duration-100 transition-all ease-in-out cursor-pointer px-5 py-2`;

  return (
    <div className="relative" onBlur={() => setIsOpen(false)} tabIndex="0">
      <motion.img
        alt="avtar"
        src={userAvatar}
        onClick={handleLogin}
        whileTap={{ scale: 0.9 }}
        className="w-10 min-w-[40px] min-h-[40px] drop-shadow-2xl cursor-pointer rounded-full"
      />
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          className="w-40 bg-slate-50 shadow-xl rounded-lg flex flex-col absolute top-12 -right-1 overflow-hidden"
        >
          {user && user.email === "nazarovshaxruh98@gmail.com" && (
            <li
              className={itemClassName}
              onClick={() => handleItem("/create-item")}
            >
              <span>new item</span>
              <IoIosAdd size={18} />
            </li>
          )}
          {/* append menus to avatar menu on mobile */}
          {isMobile &&
            menus.map((menu) => (
              <li
                key={menu.id}
                className={itemClassName}
                onClick={() => handleItem(menu.link)}
              >
                {menu.title}
              </li>
            ))}
          {/* =================================== */}
          <li
            className="px-5 
                       py-2
                       m-1 
                       flex 
                       capitalize 
                       rounded-md 
                       ease-in-out 
                       items-center 
                     bg-slate-200 
                       duration-100 
                     text-menuColor 
                       transition-all 
                       cursor-pointer 
                       justify-between 
                     hover:bg-slate-300 
                     hover:text-menuHoverColor"
            onClick={() => logout()}
          >
            <span>logout</span>
            <AiOutlineLogout size={18} />
          </li>
        </motion.ul>
      )}
    </div>
  );
};

export default Avatar;
