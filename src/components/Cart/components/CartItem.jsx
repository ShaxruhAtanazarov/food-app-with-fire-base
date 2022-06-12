import React from "react";

// icons
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// animation
import { motion } from "framer-motion";
import { useStateValue } from "store/StateProvider";
import { action_type } from "store/actions";

const CartItem = ({ cartItem, setRenderCart, renderCart }) => {
  let [{ cartItems }, dispatch] = useStateValue();

  const updateQty = (action, id) => {
    setRenderCart(!renderCart);

    if (action === "add") {
      cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          cartItem.qty += 1;
        }
      });
    }

    if (action === "remove") {
      cartItems.map((cartItem, i) => {
        if (cartItem.id === id) {
          cartItem.qty -= 1;
          if (cartItem.qty === 0) {
            cartItem.qty = 1;
            cartItems = [...cartItems.slice(0, i), ...cartItems.slice(i + 1)];
            return;
          }
        }
      });
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch({
      type: action_type.SET_CART_ITEMS,
      cartItems: cartItems,
    });
  };

  return (
    <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      {/* product banner */}
      <img
        className="w-20 h-20 min-w-[60px] rounded-full object-contain"
        src={cartItem.imageURL}
        alt="product banner"
      />
      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-gray-50 capitalize">{cartItem.title}</p>
        <p className="text-sm block text-gray-300 font-semibold">
          $ {cartItem.price * cartItem.qty}
        </p>
      </div>
      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto">
        <motion.button
          whileTap={{ scale: 0.75 }}
          type="button"
          onClick={() => updateQty("remove", cartItem.id)}
        >
          <AiOutlineMinus className="text-white" />
        </motion.button>
        <p className="w-auto p-1 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {cartItem.qty}
        </p>
        <motion.button
          whileTap={{ scale: 0.75 }}
          type="button"
          onClick={() => updateQty("add", cartItem.id)}
        >
          <AiOutlinePlus className="text-white" />
        </motion.button>
      </div>
    </div>
  );
};

export default CartItem;
