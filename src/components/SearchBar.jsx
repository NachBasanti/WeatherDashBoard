// src/components/SearchBar.jsx
import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const SearchBar = () => {
  const { fetchWeatherData } = useContext(WeatherContext);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      fetchWeatherData(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter city name..."
          className="search-input"
        />
        <button
          type="submit"
          className="search-button"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;