import React, { createContext, useState, useContext, useEffect } from 'react';
import { getCurrentWeather, getForecast, getWeatherByCoordinates, getForecastByCoordinates } from '../services/weatherService';

const WeatherContext = createContext();

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [units, setUnits] = useState('metric'); // metric or imperial

  // Initial city for weather data
  const DEFAULT_CITY = 'Ludhiana';

  // Function to fetch weather data by city name
  const fetchWeatherByCity = async (city) => {
    if (!city) return;
    
    setLoading(true);
    setError(null);
    
    try {
      // Get current weather and forecast using the weather service
      const currentData = await getCurrentWeather(city);
      const forecastData = await getForecast(city);
      
      setCurrentWeather(currentData);
      setForecast(forecastData);
      setLocation(city);
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
      console.error('Weather API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Function to get user's current location and fetch weather
  const fetchWeatherByGeolocation = () => {
    setLoading(true);
    setError(null);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            // Get current weather and forecast using the weather service
            const currentData = await getWeatherByCoordinates(latitude, longitude);
            const forecastData = await getForecastByCoordinates(latitude, longitude);
            
            setCurrentWeather(currentData);
            setForecast(forecastData);
            setLocation(currentData.location.name);
          } catch (err) {
            setError('Failed to fetch weather data. Please try again.');
            console.error('Weather API Error:', err);
          } finally {
            setLoading(false);
          }
        },
        (err) => {
          setError('Geolocation permission denied. Using default location.');
          setLoading(false);
          console.error('Geolocation Error:', err);
          fetchWeatherByCity(DEFAULT_CITY);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
      setLoading(false);
    }
  };

  // Toggle temperature units between Celsius and Fahrenheit
  const toggleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  // Load default city weather on initial render
  useEffect(() => {
    fetchWeatherByCity(DEFAULT_CITY);
  }, []);

  // Value object to be provided to consumers
  const value = {
    currentWeather,
    forecast,
    location,
    loading,
    error,
    units,
    fetchWeatherByCity,
    fetchWeatherByGeolocation,
    toggleUnits,
  };

  return (
    <WeatherContext.Provider value={value}>
      {children}
    </WeatherContext.Provider>
  );
};