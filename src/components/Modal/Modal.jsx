import React from "react";
import "./Modal.css";

const Modal = ({ question, onConfirm, onCancel }) => {
  return (
    <div className="modal-div">
      <h2 className="question">{question}</h2>
      <div className="div-buttons">
        <button onClick={onConfirm}>Potvrdi</button>
        <button onClick={onCancel}>Odustani</button>
      </div>
    </div>
  );
};

export default Modal;
