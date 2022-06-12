import React from "react";

const Section = ({ children, id }) => {
  return (
    <section className="w-full my-6" id={id}>
      {children}
    </section>
  );
};

export default Section;
