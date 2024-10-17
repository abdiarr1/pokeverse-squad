import React from 'react';

const Heading = ({ children, classes }) => {
  return (
    <h2 className={`mx-auto w-[60%] text-3xl font-bold mb-10 ${classes}`}>
      {children}
    </h2>
  );
};

export default Heading;
