import React from "react";

export function Items(props) {
  return (
    <li className="list-group-item">
      {props.children}
    </li>
  );
}
