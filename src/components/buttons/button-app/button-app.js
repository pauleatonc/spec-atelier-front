import React from 'react';

const Button = ({
  iconLeft,
  iconRight,
  label,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="button"
      className="spec-btn"
      onClick={onClick}
      disabled={disabled}>
      {iconLeft &&<span className="icon-left">{iconLeft}</span>}
      {label && <span className="label">{label}</span>}
      {iconRight && <span className="icon-right">{iconRight}</span>}
    </button>
  );
};

export default Button;
