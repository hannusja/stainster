import React from "react";
import "./style.css";

function DeleteBtn(props) {
  return (
    <span className="delete-btn" {...props} role="button" tabIndex="0" style={{ cursor: 'pointer'}}>
      I understand this statement and agree with it
    </span>
  );
}

export default DeleteBtn;
