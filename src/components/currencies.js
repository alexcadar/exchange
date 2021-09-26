import "./currencies.css";
import { useEffect, useState } from "react";

const SYMBOL_URL =
  "http://api.exchangeratesapi.io/v1/symbols?access_key=3588bf298e2c7fbffc5a59323d49e0bc&format=1";
export default function Currencies({ closeModal }) {
  const [currencyName, setCurrencyName] = useState([]);

  //--------------- GET CURRENCy NAMES ----------------
  useEffect(() => {
    fetch(SYMBOL_URL)
      .then((response) => response.json())
      .then((data) => {
        setCurrencyName([...Object.values(data.symbols)]);
      });
  });

  return (
    <div className="currencyList">
      {currencyName.map((option) => (
        <button
          className="selectOption"
          onClick={() => closeModal(false)}
          value={option}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
