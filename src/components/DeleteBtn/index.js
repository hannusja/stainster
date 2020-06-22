import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0" style={{ cursor: 'pointer'}}>
      ✗
    </span>
  );
}

export default DeleteBtn;
