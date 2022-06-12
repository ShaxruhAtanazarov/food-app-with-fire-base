import React from "react";

// components
import { Title } from "components/Title";

// animations
import { motion } from "framer-motion";

// icons
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const ProductsSliderTop = ({ title, scroll }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <Title title={title} />
      <div className="hidden md:flex gap-3 items-center">
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-lg bg-rose-400 hover:bg-rose-600 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-2xl flex items-center justify-center"
          onClick={() => scroll(-200)}
        >
          <MdKeyboardArrowLeft className="text-base text-white" size={20} />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-lg bg-rose-400 hover:bg-rose-600 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-2xl flex items-center justify-center"
          onClick={() => scroll(200)}
        >
          <MdKeyboardArrowRight className="text-base text-white" size={20} />
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsSliderTop;
