import React, { useEffect, useState } from "react";

// hooks
import useCartOpenClose from "hook/useCartOpenClose";
import { useStateValue } from "store/StateProvider";
import useLogin from "hook/useLogin";

// animation
import { motion } from "framer-motion";
// components
import CartItem from "./components/CartItem";

// actions
import { action_type } from "store/actions";

// icons
import { BsArrowRight } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [renderCart, setRenderCart] = useState(false);

  const { handlerCartOpenClose } = useCartOpenClose();
  const [{ cartItems, user }, dispatch] = useStateValue();

  const { login } = useLogin();

  useEffect(() => {
    let TotalPrice = cartItems.reduce((totalSum, item) => {
      return totalSum + item.qty * item.price;
    }, 0);

    setTotalPrice(TotalPrice);
  }, [cartItems, renderCart]);

  const clearCart = () => {
    dispatch({
      type: action_type.SET_CART_ITEMS,
      cartItems: [],
    });
    localStorage.setItem("cartItems", JSON.stringify([]));
  };

  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      exit={{ x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[100]"
    >
      {/* Cart Top section */}
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={handlerCartOpenClose}>
          <BsArrowRight className="text-textColor" size={24} />
        </motion.div>
        <p className="text-textColor text-lg font-semibold pl-6">Cart</p>
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={clearCart}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-200 rounded-md hover:shadow-md cursor-pointer text-textColor hover:text-white text-base hover:bg-rose-500"
          type="button"
        >
          <span>Clear</span>
          <AiFillDelete size={18} />
        </motion.button>
      </div>
      {/* ================================================================= */}
      {/* Cart Bottom section */}
      <div className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col justify-between">
        {/* cart items section*/}
        {cartItems && cartItems.length > 0 ? (
          <div className="w-full h-340 md:h-[530px] px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart items */}
            {cartItems &&
              cartItems?.map((cartItem) => (
                <CartItem
                  key={cartItem.id}
                  cartItem={cartItem}
                  setRenderCart={setRenderCart}
                  renderCart={renderCart}
                />
              ))}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <p className="text-xl text-white font-semibold p-4 border border-cartTotal rounded-lg">
              Add some items to your cart
            </p>
          </div>
        )}

        {/* ================================================================= */}

        {/* cart total section */}
        <div className="w-full h-300 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Sub Total:</p>
            <p className="text-gray-400 text-lg">$ {totalPrice}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Delivery:</p>
            <p className="text-gray-400 text-lg">$ 2.5</p>
          </div>

          <div className="w-full border-b bg-gray-600"></div>

          <div className="w-full flex items-center justify-between">
            <p className="text-gray-200 text-xl font-semibold">Total:</p>
            <p className="text-gray-200 text-xl font-semibold">
              $ {totalPrice + 2.5}
            </p>
          </div>

          {user ? (
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="w-full p-2 rounded-full bg-green-600 text-gray-50 text-lg my-2 hover:shadow-2xl"
            >
              Check out
            </motion.button>
          ) : (
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              onClick={login}
              className="w-full p-2 rounded-full bg-green-600 text-gray-50 text-lg my-2 hover:shadow-2xl"
            >
              Login to check out
            </motion.button>
          )}
        </div>
        {/* ================================================================= */}
      </div>
    </motion.div>
  );
};

export default Cart;
