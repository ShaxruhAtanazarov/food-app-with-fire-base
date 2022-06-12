import { useStateValue } from "store/StateProvider";
import { action_type } from "store/actions";
import { getAllFoodItems } from "utils/fireBaseFunctions";
import { useCallback } from "react";

const useGetDataFromDb = () => {
  const [{ foodList }, dispatch] = useStateValue();

  const getDataFromDb = useCallback(async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: action_type.SET_FOOD_LIST,
        foodList: data,
      });
    });
  }, [dispatch]);

  return { getDataFromDb };
};

export default useGetDataFromDb;
