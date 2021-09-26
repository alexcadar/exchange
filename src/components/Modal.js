import React from "react";
import Currencies from "./currencies";
import "./Modal.css";

function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="closeModal">
          <button id="buttonX" onClick={() => closeModal(false)}>
            X
          </button>
        </div>
        <div className="modalTitle">
          <h1>Select the Currency</h1>
        </div>
        <div className="modalBody">
          <div className="currencies">
            {/*---------- Display the currencies within the modal ----------*/}
            <Currencies closeModal={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
