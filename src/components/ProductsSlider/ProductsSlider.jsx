import React, { createRef } from "react";

// components
import { Section } from "components/Section";
import { ProductCardsRow } from "components/ProductCardsRow";
import ProductsSliderTop from "./components/ProductsSliderTop";

const ProductsSlider = ({ title, data }) => {
  const ref = createRef();

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <Section>
      <ProductsSliderTop title={title} scroll={scroll} />
      <ProductCardsRow ref={ref} flag data={data} />
    </Section>
  );
};

export default ProductsSlider;
