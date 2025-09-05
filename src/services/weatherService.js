import axios from 'axios';

// API key for WeatherAPI.com
const API_KEY = 'b194304d1a684f7882a110652250509';
const BASE_URL = 'https://api.weatherapi.com/v1';

/**
 * Get current weather data by city name
 * @param {string} city - City name
 * @returns {Promise} - Promise with weather data
 */
export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

/**
 * Get forecast weather data by city name
 * @param {string} city - City name
 * @param {number} days - Number of days for forecast (default: 5)
 * @returns {Promise} - Promise with forecast data
 */
export const getForecast = async (city, days = 5) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: city,
        days,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};

/**
 * Get weather data by coordinates
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @returns {Promise} - Promise with weather data
 */
export const getWeatherByCoordinates = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: `${lat},${lon}`,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather by coordinates:', error);
    throw error;
  }
};

/**
 * Get forecast by coordinates
 * @param {number} lat - Latitude
 * @param {number} lon - Longitude
 * @param {number} days - Number of days for forecast (default: 5)
 * @returns {Promise} - Promise with forecast data
 */
export const getForecastByCoordinates = async (lat, lon, days = 5) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: `${lat},${lon}`,
        days,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast by coordinates:', error);
    throw error;
  }
};