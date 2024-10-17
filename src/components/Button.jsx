import React from 'react';

const Button = ({ children, classes, onClick }) => {
  const className = `py-1 px-2 rounded-lg text-white ${classes}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
