import React from "react";

// icons
import { BsBoxSeam } from "react-icons/bs";

const NoData = () => {
  return (
    <div className="mt-10 w-full flex flex-col justify-center items-center">
      {<BsBoxSeam className="text-mainColor" size={150} />}
      <span className="capitalize font-semibold text-mainColor text-2xl py-4">
        Empty data
      </span>
    </div>
  );
};

export default NoData;
