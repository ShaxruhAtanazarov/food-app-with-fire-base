import React from "react";

// animation
import { motion } from "framer-motion";

// icons
import { FaShoppingBasket } from "react-icons/fa";
import useCartOpenClose from "hook/useCartOpenClose";
import { useStateValue } from "store/StateProvider";

const Basket = () => {
  const { handlerCartOpenClose } = useCartOpenClose();
  const [{ cartItems }] = useStateValue();

  return (
    <div className="relative self-center" onClick={handlerCartOpenClose}>
      <motion.button type="button" whileTap={{ scale: 0.6 }}>
        <FaShoppingBasket
          className="text-menuBasketColor cursor-pointer"
          size={18}
        />
      </motion.button>
      {cartItems && cartItems.length > 0 && (
        <div className="w-[18px] h-[18px] rounded-full bg-cartNumBg absolute -top-3 -right-3 flex items-center justify-center">
          <p className=" text-white font-base text-[11px] absolute top-[2px]">
            {cartItems.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Basket;
