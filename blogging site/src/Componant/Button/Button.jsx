import React from 'react';

export const Button = ({ Name, className }) => {
  return (
    <button type="button" className={`btn  ${className}`}>
      {Name}
    </button>
  );
};
