import React, { forwardRef } from "react";

// components
import { ProductCard } from "components/ProductCard";
import { CardSkeleton } from "components/Skeleton";
import { NoData } from "components/NoData";

const ProductCardsRow = forwardRef((props, ref) => {
  const { data, flag } = props;

  return (
    <div
      ref={ref}
      className={`w-full flex items-center gap-4 pb-0 pt-10 md:pb-0 md:pt-0 md:py-12 px-2 transition-all duration-100 ease-linear ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data?.length === 0 ? <NoData /> : ""}
      {data
        ? data?.map((item, _i) => (
            <div key={_i}>
              <ProductCard data={item} />
            </div>
          ))
        : Array(6)
            .fill(4)
            .map((_item, _i) => (
              <div key={_i}>
                <CardSkeleton />
              </div>
            ))}
    </div>
  );
});

export default ProductCardsRow;
