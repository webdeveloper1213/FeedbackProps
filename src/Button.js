import React from 'react';
import './Button.css';
// import PropTypes from 'prop-types';
const Button = ({children , version , type , isDisabled,onClick}) => {
  return <button
  type={type}
  className={`btn btn-${version}`}
  onClick={onClick}
  disabled = {isDisabled}
   >
      {children}
  </button>
};

Button.defaultProps = {
version : 'primary',
type : 'button',
isDisabled : false

}
export default Button;
