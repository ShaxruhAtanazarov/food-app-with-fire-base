import { useStateValue } from "store/StateProvider";

// actions type
import { action_type } from "store/actions";

const useCartOpenClose = () => {
  const [{ isCartOpen }, dispatch] = useStateValue();

  const handlerCartOpenClose = () => {
    dispatch({
      type: action_type.SET_IS_CART_OPEN,
      isCartOpen: !isCartOpen,
    });
  };

  return { handlerCartOpenClose };
};

export default useCartOpenClose;
