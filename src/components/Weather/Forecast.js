import React from 'react';
import styled from 'styled-components';
import { useWeather } from '../../context/WeatherContext';

const ForecastContainer = styled.div`
  margin-top: 1.5rem;
`;

const ForecastTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--blue);
  margin-bottom: 1rem;
`;

const ForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ForecastCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const ForecastDay = styled.div`
  font-weight: 500;
  color: var(--blue);
  margin-bottom: 0.5rem;
`;

const ForecastIcon = styled.img`
  width: 50px;
  height: 50px;
  margin: 0.5rem 0;
`;

const ForecastTemp = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

const MaxTemp = styled.span`
  color: var(--orange);
  font-weight: 500;
`;

const MinTemp = styled.span`
  color: var(--grey);
`;

const ForecastCondition = styled.div`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 0.5rem;
  color: var(--grey);
`;

const Forecast = () => {
  const { forecast, units } = useWeather();
  
  if (!forecast) {
    return (
      <ForecastContainer>
        <ForecastTitle>5-Day Forecast</ForecastTitle>
        <p>No forecast data available.</p>
      </ForecastContainer>
    );
  }
  
  const isMetric = units === 'metric';
  const forecastDays = forecast.forecast.forecastday;
  
  // Format day name
  const getDayName = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, { weekday: 'short' });
  };
  
  return (
    <ForecastContainer>
      <ForecastTitle>5-Day Forecast</ForecastTitle>
      <ForecastGrid>
        {forecastDays.map((day) => (
          <ForecastCard key={day.date}>
            <ForecastDay>{getDayName(day.date)}</ForecastDay>
            <ForecastIcon 
              src={day.day.condition.icon} 
              alt={day.day.condition.text} 
            />
            <ForecastTemp>
              <MaxTemp>
                {isMetric ? `${Math.round(day.day.maxtemp_c)}°` : `${Math.round(day.day.maxtemp_f)}°`}
              </MaxTemp>
              <MinTemp>
                {isMetric ? `${Math.round(day.day.mintemp_c)}°` : `${Math.round(day.day.mintemp_f)}°`}
              </MinTemp>
            </ForecastTemp>
            <ForecastCondition>{day.day.condition.text}</ForecastCondition>
          </ForecastCard>
        ))}
      </ForecastGrid>
    </ForecastContainer>
  );
};

export default Forecast;