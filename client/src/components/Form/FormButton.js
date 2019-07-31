import React from "react";

export function FormButton(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-info">
      {props.children}
    </button>
  );
}
