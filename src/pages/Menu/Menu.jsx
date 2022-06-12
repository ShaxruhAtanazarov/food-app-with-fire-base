import React from "react";

import { ProductsSlider } from "components/ProductsSlider";
import { useStateValue } from "store/StateProvider";

// sections
import { menu as menus } from "settings/menu-page-settings";

const Menu = () => {
  const [{ foodList }] = useStateValue();

  return (
    <>
      <p className="capitalize text-[150%] sm:text-[200%] md:text-[300%] font-semibold text-mainColor">
        our menu
      </p>
      {menus?.map((menu) => (
        <div key={menu.id} className="border-b-[2px]">
          <ProductsSlider
            title={menu.section_title}
            data={foodList?.filter((food) => food.category === menu.filteredBy)}
          />
        </div>
      ))}
    </>
  );
};

export default Menu;
