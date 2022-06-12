import React from "react";

const CardSkeleton = () => {
  return (
    <div className="border border-productCardBorderColor bg-productCardBg shadow rounded-md p-4 max-w-sm mx-auto w-300 h-[222px] md:w-[340px] min-w-[340px]  md:min-w-[340px] my-12 backdrop-blur-lg transition-all duration-100 ease-in-out hover:shadow-lg relative">
      <div className="animate-pulse flex flex-col justify-between h-[100%]">
        <div className="rounded-full bg-slate-100 w-28 h-28 drop-shadow-2xl" />
        <div className="w-8 h-8 rounded-full bg-slate-100 absolute top-2 right-2" />
        <div className="align-bottom">
          <div className="h-4 bg-slate-200 ml-auto w-[200px] rounded mb-1" />
          <div className="h-4 bg-slate-200 ml-auto w-[100px] rounded mb-1" />
          <div className="h-4 bg-slate-200 ml-auto w-[50px] rounded mb-2" />
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
