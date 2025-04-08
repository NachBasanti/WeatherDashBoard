// src/context/WeatherContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Using the provided API key
  const API_KEY = "c16d7f17f3866add6bd9792bd0b0cfca";
  
  // Load favorites from localStorage on initial render
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteCities");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("favoriteCities", JSON.stringify(favorites));
  }, [favorites]);

  const fetchWeatherData = async (cityName) => {
    if (!cityName) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      
      if (!response.ok) {
        throw new Error("City not found");
      }
      
      const data = await response.json();
      setWeatherData(data);
      setCity(cityName);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  const addToFavorites = () => {
    if (city && !favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFromFavorites = (cityToRemove) => {
    setFavorites(favorites.filter(city => city !== cityToRemove));
  };

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        favorites,
        loading,
        error,
        fetchWeatherData,
        addToFavorites,
        removeFromFavorites
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;