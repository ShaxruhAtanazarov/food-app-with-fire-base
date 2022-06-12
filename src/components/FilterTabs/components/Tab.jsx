import React from "react";

// categories
import { categories } from "utils/data";

// animations
import { motion } from "framer-motion";

const Tab = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
      {categories &&
        categories?.map((category, _i) => (
          <motion.div
            whileTap={{ scale: 0.6 }}
            key={_i}
            onClick={() => setActiveTab(category.urlParamName)}
            className={`group ${
              activeTab === category.urlParamName ? "bg-mainColor" : "bg-white"
            }   w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg hover:drop-shadow-xl hover:bg-mainColor flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out`}
          >
            <div
              className={`w-10 h-10 rounded-full ${
                activeTab === category.urlParamName
                  ? "bg-white"
                  : "bg-mainColor"
              }  group-hover:bg-white flex items-center justify-center`}
            >
              <div
                className={`text-white ${
                  activeTab === category.urlParamName
                    ? "text-mainColor"
                    : "text-white"
                } group-hover:text-mainColor`}
              >
                {category.icon}
              </div>
            </div>
            <p
              className={`text-sm  capitalize group-hover:text-white ${
                activeTab === category.urlParamName
                  ? "text-white"
                  : "text-mainColor"
              }`}
            >
              {category.name}
            </p>
          </motion.div>
        ))}
    </div>
  );
};

export default Tab;
