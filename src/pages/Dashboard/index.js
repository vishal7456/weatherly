import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useWeather } from '../../context/WeatherContext';
import SearchBar from '../../components/Weather/SearchBar';
import CurrentWeather from '../../components/Weather/CurrentWeather';
import Forecast from '../../components/Weather/Forecast';

const DashboardContainer = styled.div`
  padding: 1rem;
`;

const LoadingIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.2rem;
  color: var(--blue);
`;

const ErrorMessage = styled.div`
  background-color: rgba(255, 0, 0, 0.1);
  border-left: 4px solid #ff0000;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #ff0000;
  border-radius: 4px;
`;

const Dashboard = () => {
  const { loading, error, fetchWeatherByGeolocation, currentWeather } = useWeather();
  
  // Try to get user's location on initial load if no weather data is available
  useEffect(() => {
    if (!currentWeather) {
      fetchWeatherByGeolocation();
    }
  }, [fetchWeatherByGeolocation, currentWeather]);
  
  return (
    <DashboardContainer>
      <SearchBar />
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      {loading ? (
        <LoadingIndicator>Loading weather data...</LoadingIndicator>
      ) : (
        <>
          <CurrentWeather />
          <Forecast />
        </>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;