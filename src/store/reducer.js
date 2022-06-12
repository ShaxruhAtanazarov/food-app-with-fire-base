// actions
import { action_type } from "./actions";

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case action_type.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case action_type.SET_FOOD_LIST:
      return {
        ...state,
        foodList: action.foodList,
      };

    case action_type.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: action.isCartOpen,
      };

    case action_type.SET_CART_ITEMS:
      const inCart = state.cartItems.some((item) => item.id === action.id);

      if (inCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.id
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: action.cartItems,
        };
      }

    default:
      return { ...state };
  }
};

export default reducer;
