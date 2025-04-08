// src/components/CurrentWeather.jsx
import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherCard from "./WeatherCard";

const CurrentWeather = () => {
  const { weatherData, loading, error, city, addToFavorites, favorites } = useContext(WeatherContext);

  if (loading) {
    return (
      <div className="weather-loading">
        <div className="spinner"></div>
        <p>Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-error">
        <div className="error-icon">⚠️</div>
        <p>{error}</p>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="weather-placeholder">
        <p>Search for a city to see weather information</p>
      </div>
    );
  }

  const isFavorite = favorites.includes(city);

  return (
    <div className="current-weather">
      <div className="weather-header">
        <h2>{city}</h2>
        {!isFavorite && (
          <button
            onClick={addToFavorites}
            className="favorite-button"
          >
            Add to Favorites
          </button>
        )}
        {isFavorite && (
          <span className="favorite-tag">★ In Favorites</span>
        )}
      </div>
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default CurrentWeather;