// src/components/WeatherCard.jsx
import React from "react";

const WeatherCard = ({ weatherData }) => {
  if (!weatherData) return null;

  const { main, weather, wind } = weatherData;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  
  // Get weather condition class for styling
  const getWeatherClass = () => {
    const id = weather[0].id;
    if (id >= 200 && id < 300) return 'weather-thunderstorm';
    if (id >= 300 && id < 400) return 'weather-drizzle';
    if (id >= 500 && id < 600) return 'weather-rain';
    if (id >= 600 && id < 700) return 'weather-snow';
    if (id >= 700 && id < 800) return 'weather-atmosphere';
    if (id === 800) return 'weather-clear';
    if (id > 800) return 'weather-clouds';
    return '';
  };

  return (
    <div className={`weather-card ${getWeatherClass()}`}>
      <div className="weather-main">
        <img src={iconUrl} alt={weather[0].description} className="weather-icon" />
        <div className="weather-info">
          <p className="temperature">{Math.round(main.temp)}°C</p>
          <p className="description">{weather[0].description}</p>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-icon">🌡️</span>
          <div>
            <p className="detail-label">Feels Like</p>
            <p className="detail-value">{Math.round(main.feels_like)}°C</p>
          </div>
        </div>
        
        <div className="detail-item">
          <span className="detail-icon">💧</span>
          <div>
            <p className="detail-label">Humidity</p>
            <p className="detail-value">{main.humidity}%</p>
          </div>
        </div>
        
        <div className="detail-item">
          <span className="detail-icon">💨</span>
          <div>
            <p className="detail-label">Wind Speed</p>
            <p className="detail-value">{wind.speed} m/s</p>
          </div>
        </div>
        
        <div className="detail-item">
          <span className="detail-icon">🧭</span>
          <div>
            <p className="detail-label">Pressure</p>
            <p className="detail-value">{main.pressure} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;