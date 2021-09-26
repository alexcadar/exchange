import React, { useState, useEffect } from "react";
import "./currencyBox.css";

const URL =
  "http://api.exchangeratesapi.io/v1/latest?access_key=3588bf298e2c7fbffc5a59323d49e0bc&format=1";

function CurrencyBox({ contentBox }) {
  const [base, setbase] = useState("");

  //-------------------fetching data from API----------
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setbase(data.base));
  });

  return (
    <div className="currencyBox">
      <form className="form">
        <div className="deleteBoxButton">
          <button className="deleteBox" onClick={() => contentBox(false)}>
            X
          </button>
        </div>
        <div className="currencyInput">
          <p className="textFormat">Value: </p>
          <input type="text" className="currencyValue" />
        </div>
        <div className="currencyContent">
          {/*-------------getting the currency base---------- */}
          <h3 className="textFormat">Currency base: {base} </h3>
        </div>
      </form>
    </div>
  );
}

export default CurrencyBox;
