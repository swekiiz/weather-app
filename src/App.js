import "./App.css";
import React, { useState } from "react";
import keys from "./keys";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {
  const dataBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };

  return (
    <div className="App">
      <main>
        <div className="search_container">
          <input type="text" placeholder="serach..." className="search_bar" />
        </div>
        <div className="location_container">
          <div className="location">Bangkok, Thailand</div>
          <div className="date">Nov 27 2020</div>
        </div>
        <div className="weather_container">
          <div className="temperature">30°C</div>
        </div>
        <div className="weather">Clouds</div>
      </main>
    </div>
  );
}

export default App;
