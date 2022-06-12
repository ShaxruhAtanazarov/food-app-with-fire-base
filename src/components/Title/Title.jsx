import React from "react";

const Title = ({ title }) => {
  return (
    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-rose-300 to-rose-500 transition-all ease-in-out duration-100">
      {title}
    </p>
  );
};

export default Title;
