import React, { useMemo } from "react";
import { useStateValue } from "store/StateProvider";
import { get } from "lodash";

// components
import Hero from "./components/Hero";
import { FilterTabs } from "components/FilterTabs";
import { ProductsSlider } from "components/ProductsSlider";

// section titles
import { site_section_titles } from "settings/site-section-titles";

const Home = () => {
  const [{ foodList }] = useStateValue();

  // filtering "fruits" category from foodList
  const filteredFruitsCategory = useMemo(() => {
    return foodList?.filter((foodItem) => foodItem.category === "fruits");
  }, [foodList]);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* Hero */}
      <Hero />
      {/* ================================================================= */}
      {/* Fruit Card Section */}
      <ProductsSlider
        title={get(
          site_section_titles,
          "homePageSectionTitleFirst",
          "our fresh & healthy fruits"
        )}
        data={filteredFruitsCategory}
      />
      {/* ================================================================= */}
      {/* Filter Tabs */}
      <FilterTabs
        title={get(
          site_section_titles,
          "homePageSectionTitleSecond",
          "our hot dishes"
        )}
        data={foodList}
      />
      {/* ================================================================= */}
    </div>
  );
};

export default Home;
