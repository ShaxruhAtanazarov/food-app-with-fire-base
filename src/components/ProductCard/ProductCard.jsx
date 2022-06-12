import React, { useEffect } from "react";
import { useStateValue } from "store/StateProvider";

// animation
import { motion } from "framer-motion";

// actions type
import { action_type } from "./../../store/actions";

// icons
import { FaShoppingBasket } from "react-icons/fa";

const ProductCard = ({ data }) => {
  const { id, imageURL, title, calories, price } = data;
  const [{ cartItems }, dispatch] = useStateValue();

  const handlerAddToCart = (product) => {
    dispatch({
      type: action_type.SET_CART_ITEMS,
      cartItems: [...cartItems, product],
      id: product.id,
    });
  };

  useEffect(() => {
    if (cartItems.length !== 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  return (
    <div
      className="w-[290px] sm:w-[290px] md:w-[280px] lg:w-[400px] lg:min-w-[340px] h-auto my-4 md:my-12 bg-productProductCardBg rounded-lg p-2 border border-productProductCardBorderColor backdrop-blur-lg transition-all duration-100 ease-in-out hover:shadow-lg relative"
      key={id}
    >
      <div className="w-full flex items-center justify-between">
        <motion.img
          whileHover={{ scale: 1.1 }}
          className="md:w-48 md:h-40 w-36 h-36 max-w-48 -mt-9 drop-shadow-2xl object-contain"
          src={imageURL}
          alt="produc banner"
        />
        {/* shopping basket icon*/}
        <motion.button
          whileTap={{ scale: 0.75 }}
          onClick={() => handlerAddToCart(data)}
          type="button"
          className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer absolute top-2 right-2"
        >
          <FaShoppingBasket className="text-white" size={16} />
        </motion.button>
      </div>

      <div className="w-full flex flex-col items-end justify-end">
        <p className="text-textColor font-semibold text-base md:text-lg capitalize">
          {title}
        </p>
        <p className="mt-1 text-sm text-gray-500">{calories} calories</p>
        <div className="flex items-center gap-8">
          <p className="text-lg text-textColor font-semibold">
            <span className="text-sm text-red-500">$ </span>
            <span>{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
