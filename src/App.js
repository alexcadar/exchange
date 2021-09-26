import "./App.css";
import { useState, useEffect } from "react";
import Modal from "./components/Modal";
import Date from "./components/Date";
import CurrencyBox from "./components/CurrencyBox";

function App() {
  const [openModal, setModal] = useState(false); //State of the modal
  const [openBox, setBox] = useState(true); //State of the currency box

  return (
    <div className="App">
      <div className="header">
        <h1 id="appTitle">Currency Exchange</h1>
      </div>
      <Date />

      <div className="appContainer">
        {openBox && <CurrencyBox contentBox={setBox} />}
      </div>

      {openModal && <Modal closeModal={setModal} />}
      <div className="button">
        <button className="add-new" onClick={() => setModal(true)}>
          Add currency
        </button>
      </div>
    </div>
  );
}

export default App;
