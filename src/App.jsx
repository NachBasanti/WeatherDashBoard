// src/App.jsx
import React from 'react';
import WeatherProvider from './context/WeatherContext';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import FavoriteCities from './components/FavoriteCities';
import './App.css';

function App() {
  return (
    <WeatherProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Weather Dashboard</h1>
        </header>
        <main className="dashboard-layout">
          <aside className="sidebar">
            <FavoriteCities />
          </aside>
          <section className="main-content">
            <SearchBar />
            <CurrentWeather />
          </section>
        </main>
      </div>
    </WeatherProvider>
  );
}

export default App;