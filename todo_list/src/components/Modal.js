import React from "react";
import ReactDOM from "react-dom";
import "../App.css";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      className="ui dimmer modals visible active modal-mid-back"
    >
      <div
        id="modal-mid"
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active modal-mid"
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
