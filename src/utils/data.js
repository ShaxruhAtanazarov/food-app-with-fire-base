import { BiDrink, BiDish } from "react-icons/bi";
import { IoIceCreamOutline } from "react-icons/io5";
import { GiFruitBowl, GiBowlOfRice, GiChickenOven } from "react-icons/gi";

export const categories = [
  {
    id: 1,
    name: "Chicken",
    urlParamName: "chicken",
    icon: <GiChickenOven size={24} />,
  },
  {
    id: 2,
    name: "Rice",
    urlParamName: "rice",
    icon: <GiBowlOfRice size={24} />,
  },
  {
    id: 3,
    name: "Fish",
    urlParamName: "fish",
    icon: <BiDish size={24} />,
  },
  {
    id: 4,
    name: "Fruits",
    urlParamName: "fruits",
    icon: <GiFruitBowl size={24} />,
  },
  {
    id: 5,
    name: "Icecreams",
    urlParamName: "icecreams",
    icon: <IoIceCreamOutline size={24} />,
  },

  {
    id: 6,
    name: "Soft Drinks",
    urlParamName: "drinks",
    icon: <BiDrink size={24} />,
  },
];
