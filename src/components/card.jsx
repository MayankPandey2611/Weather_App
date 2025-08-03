import React from "react";
import { useWeather } from "../context/weather";

const Card = () => {
  const weather = useWeather();

  if (weather.loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Fetching weather data...</p>
      </div>
    );
  }

  if (!weather.data?.current) {
    return <h3>No weather data available</h3>;
  }

  const condition = weather.data.current.condition.text.toLowerCase();

  const renderWeatherIcon = () => {
    if (condition.includes("sunny") || condition.includes("clear")) {
      return (
        <div className="sun-icon">
          <div className="sun"></div>
          <div className="rays"></div>
        </div>
      );
    } else if (condition.includes("rain")) {
      return (
        <div className="rain-icon">
          <div className="cloud"></div>
          <div className="raindrop drop1"></div>
          <div className="raindrop drop2"></div>
          <div className="raindrop drop3"></div>
        </div>
      );
    }else if (condition.includes("cloud")) {
  return (
    <div className="cloud-icon">
      <div className="cloud">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
} else {
      return <img src={weather.data.current.condition.icon} alt="Weather Icon" />;
    }
  };

  return (
    <div className="card">
      {renderWeatherIcon()}
      <h2>{weather.data.current.temp_c}°C</h2>
      <h5>
        {weather.data.location.name}, {weather.data.location.region}{" "}
        {weather.data.location.country}
      </h5>
    </div>
  );
};

export default Card;
