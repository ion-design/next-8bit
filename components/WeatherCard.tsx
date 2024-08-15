
// Weather card that displays weather and a suggestion of what to wear at a zip code


import React, { useState } from 'react';

const mockWeatherData = {
    temperature: 20,
    condition: 'Sunny',
    };

const WeatherCard = () => {
  const [zipCode, setZipCode] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      // This is a mock API call. Replace with actual API in production.
    //   const response = await fetch(`https://api.example.com/weather/${zipCode}`);
    //   if (!response.ok) {
    //     throw new Error('Failed to fetch weather data');
    //   }
    //   const data = await response.json();
        //   setWeatherData(data);
        setWeatherData(mockWeatherData);
    } catch (err) {
      setError('Error fetching weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getClothingSuggestion = (temperature) => {
    if (temperature > 25) return 'Light clothing like t-shirts and shorts';
    if (temperature > 15) return 'Light jacket or sweater';
    return 'Warm coat and layers';
  };

  return (
    <div className="nes-container with-title is-dark max-w-md mx-auto mt-10">
      <p className="title">Weather Forecast</p>
      <div className="mb-4">
        <label htmlFor="zip-code" className="block mb-2">Enter Zip Code:</label>
        <input
          type="text"
          id="zip-code"
          className="nes-input text-neutral-800"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>
      <button 
        className="nes-btn is-primary mb-4" 
        onClick={fetchWeather}
        disabled={loading}
      >
        Get Weather
      </button>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weatherData && (
        <div className="nes-container is-rounded">
          <h3 className="text-lg font-bold mb-2">Current Weather</h3>
          <p>Temperature: {weatherData.temperature}°C</p>
          <p>Condition: {weatherData.condition}</p>
          <p className="mt-4">
            <strong>What to wear:</strong> {getClothingSuggestion(weatherData.temperature)}
          </p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
