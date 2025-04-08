// src/components/FavoriteCities.jsx
import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const FavoriteCities = () => {
  const { favorites, fetchWeatherData, removeFromFavorites, city } = useContext(WeatherContext);

  return (
    <div className="favorites-container">
      <h2>Favorite Cities</h2>
      {favorites.length === 0 ? (
        <div className="no-favorites">
          <p>No favorite cities yet</p>
          <span className="favorites-icon">⭐</span>
        </div>
      ) : (
        <ul className="favorites-list">
          {favorites.map((favoriteCity) => (
            <li
              key={favoriteCity}
              className={`favorite-item ${city === favoriteCity ? 'active' : ''}`}
            >
              <button
                onClick={() => fetchWeatherData(favoriteCity)}
                className="city-button"
              >
                {favoriteCity}
              </button>
              <button
                onClick={() => removeFromFavorites(favoriteCity)}
                className="remove-button"
                title="Remove from favorites"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoriteCities;