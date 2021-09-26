import React, { useState, useEffect } from "react";

export default function Date() {
  const BASE_URL =
    "http://api.exchangeratesapi.io/v1/latest?access_key=3588bf298e2c7fbffc5a59323d49e0bc&format=1";
  const [date, setDate] = useState([]);

  //---------------- fetching the data from API--------------------
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setDate([data.date]);
      });
  }, []);

  return (
    <div className="exchangeDate">
      {/*---------------- GET DATE FROM API-------------------- */}
      <h2 id="date">{date}</h2>
    </div>
  );
}
