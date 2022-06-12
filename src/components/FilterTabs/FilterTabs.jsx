import React, { useEffect, useState } from "react";

// components
import { Title } from "components/Title";
import { Section } from "components/Section";

import Tab from "./components/Tab";
import { ProductCardsRow } from "components/ProductCardsRow";

const FilterTabs = ({ title, data }) => {
  const [activeTab, setActiveTab] = useState("chicken");

  return (
    <Section id={"filter-menu"}>
      {/* Title */}
      <div className="flex justify-start w-full">
        <Title title={title} />
      </div>
      {/* ======================================= */}
      {/* Tabs */}
      <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* ======================================= */}

      <ProductCardsRow
        flag={false}
        data={data?.filter((item) => item.category === activeTab)}
      />
    </Section>
  );
};

export default FilterTabs;
