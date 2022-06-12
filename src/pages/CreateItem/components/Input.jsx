import React from "react";
import PropTypes from "prop-types";

const Input = ({ type, value, func, placeholder }) => {
  return (
    <input
      type={type}
      required
      value={value}
      onChange={(e) => func(e.target.value)}
      placeholder={placeholder}
      className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-400 text-textColor"
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  func: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
