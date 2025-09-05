import React from 'react';
import styled from 'styled-components';
import { useWeather } from '../../context/WeatherContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind, faTint, faCompass } from '@fortawesome/free-solid-svg-icons';

const CurrentWeatherCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const WeatherHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

const LocationName = styled.h2`
  font-size: 1.75rem;
  color: var(--grey);
  margin: 0;
`;

const CurrentDate = styled.div`
  color: var(--blue);
  font-size: 1rem;
`;

const WeatherMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const Temperature = styled.div`
  display: flex;
  align-items: center;
`;

const TempValue = styled.span`
  font-size: 3.5rem;
  font-weight: bold;
  color: var(--grey);
`;

const TempUnit = styled.span`
  font-size: 1.5rem;
  margin-left: 0.5rem;
  color: var(--blue);
  align-self: flex-start;
  margin-top: 0.5rem;
`;

const WeatherCondition = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ConditionIcon = styled.img`
  width: 64px;
  height: 64px;
`;

const ConditionText = styled.span`
  margin-top: 0.5rem;
  color: var(--grey);
  font-size: 1.1rem;
`;

const WeatherDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(30, 144, 255, 0.1);
  }
`;

const DetailLabel = styled.span`
  font-size: 0.85rem;
  color: var(--blue);
  margin-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DetailValue = styled.span`
  font-size: 1.1rem;
  color: var(--grey);
  font-weight: 500;
`;

const CurrentWeather = () => {
  const { currentWeather, units } = useWeather();
  
  if (!currentWeather) {
    return (
      <CurrentWeatherCard>
        <p>No weather data available. Please search for a location.</p>
      </CurrentWeatherCard>
    );
  }
  
  const { current, location } = currentWeather;
  const isMetric = units === 'metric';
  
  // Format date
  const date = new Date(location.localtime);
  const formattedDate = date.toLocaleDateString(undefined, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <CurrentWeatherCard>
      <WeatherHeader>
        <LocationName>{location.name}, {location.country}</LocationName>
        <CurrentDate>{formattedDate}</CurrentDate>
      </WeatherHeader>
      
      <WeatherMain>
        <Temperature>
          <TempValue>{isMetric ? current.temp_c : current.temp_f}</TempValue>
          <TempUnit>{isMetric ? '°C' : '°F'}</TempUnit>
        </Temperature>
        
        <WeatherCondition>
          <ConditionIcon src={current.condition.icon} alt={current.condition.text} />
          <ConditionText>{current.condition.text}</ConditionText>
        </WeatherCondition>
      </WeatherMain>
      
      <WeatherDetails>
        <DetailItem>
          <DetailLabel>
            <FontAwesomeIcon icon={faWind} /> Wind
          </DetailLabel>
          <DetailValue>
            {isMetric ? `${current.wind_kph} km/h` : `${current.wind_mph} mph`}
          </DetailValue>
        </DetailItem>
        
        <DetailItem>
          <DetailLabel>
            <FontAwesomeIcon icon={faTint} /> Humidity
          </DetailLabel>
          <DetailValue>{current.humidity}%</DetailValue>
        </DetailItem>
        
        <DetailItem>
          <DetailLabel>
            <FontAwesomeIcon icon={faCompass} /> Wind Direction
          </DetailLabel>
          <DetailValue>{current.wind_dir}</DetailValue>
        </DetailItem>
        
        <DetailItem>
          <DetailLabel>Feels Like</DetailLabel>
          <DetailValue>
            {isMetric ? `${current.feelslike_c}°C` : `${current.feelslike_f}°F`}
          </DetailValue>
        </DetailItem>
        
        <DetailItem>
          <DetailLabel>Pressure</DetailLabel>
          <DetailValue>
            {isMetric ? `${current.pressure_mb} mb` : `${current.pressure_in} in`}
          </DetailValue>
        </DetailItem>
        
        <DetailItem>
          <DetailLabel>UV Index</DetailLabel>
          <DetailValue>{current.uv}</DetailValue>
        </DetailItem>
      </WeatherDetails>
    </CurrentWeatherCard>
  );
};

export default CurrentWeather;