import React, { useState } from "react";
import * as keys from "./keys";
import "./App.css";

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {
  const dataBuild = (p) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);
    return date;
  };
  const [searchValue, setSearchValue] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${searchValue}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setSearchValue("");
          setWeather(result);
          console.log(result);
        })
        .catch((error) => console.log("ERROR ! ::", error));
    }
  };
  return (
    <div
      className={
        typeof weather.main != "undefined"
          ? weather.main.temp > 16
            ? "App hot"
            : "App cold"
          : "App"
      }
    >
      <main>
        <div className="search_container">
          <input
            type="text"
            placeholder="Serach..."
            className="search_bar"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location_container">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dataBuild(new Date())}</div>
            </div>
            <div className="weather_container">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
