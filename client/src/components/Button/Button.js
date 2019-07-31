import React from "react";

const Button = props => (
  <button className={`book-btn btn btn-${props.btntype} btn-sm`} {...props}>
    {props.children}
  </button>
);

export default Button;
