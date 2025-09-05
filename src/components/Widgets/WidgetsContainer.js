import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useWeather } from '../../context/WeatherContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMapMarkerAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const WidgetsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

const Widget = styled.div`
  background-color: var(--card-bg);
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const WidgetTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  color: var(--blue);
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ClockWidget = () => {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <Widget>
      <WidgetTitle>
        <FontAwesomeIcon icon={faClock} /> Current Time
      </WidgetTitle>
      <div>
        <div>{time.toLocaleTimeString()}</div>
        <div>{time.toLocaleDateString()}</div>
      </div>
    </Widget>
  );
};

const LocationWidget = () => {
  const { currentWeather } = useWeather();
  
  return (
    <Widget>
      <WidgetTitle>
        <FontAwesomeIcon icon={faMapMarkerAlt} /> Location Info
      </WidgetTitle>
      {currentWeather ? (
        <div>
          <div>{currentWeather.location.name}</div>
          <div>{currentWeather.location.region}, {currentWeather.location.country}</div>
          <div>Local Time: {currentWeather.location.localtime}</div>
        </div>
      ) : (
        <div>No location data available</div>
      )}
    </Widget>
  );
};

const weatherTips = [
  "Don't forget your umbrella if there's a chance of rain!",
  "Apply sunscreen on sunny days, even in winter.",
  "Stay hydrated during hot weather conditions.",
  "Wear layers during variable temperature days.",
  "Check for weather alerts before outdoor activities.",
  "Keep an emergency kit ready during storm seasons.",
  "Protect plants from frost when temperatures drop below freezing.",
  "Wear reflective clothing when walking in foggy conditions.",
  "Use a humidifier during dry weather to maintain indoor comfort.",
  "Close windows and secure outdoor items during high winds."
];

const TipsWidget = () => {
  const [tip, setTip] = useState('');
  const { currentWeather } = useWeather();
  
  useEffect(() => {
    // Select a tip based on current weather or random if no weather data
    if (currentWeather) {
      const condition = currentWeather.current.condition.text.toLowerCase();
      let selectedTip;
      
      if (condition.includes('rain') || condition.includes('shower')) {
        selectedTip = weatherTips[0];
      } else if (condition.includes('sun') || condition.includes('clear')) {
        selectedTip = weatherTips[1];
      } else if (condition.includes('hot')) {
        selectedTip = weatherTips[2];
      } else if (condition.includes('cloud') || condition.includes('overcast')) {
        selectedTip = weatherTips[3];
      } else if (condition.includes('storm') || condition.includes('thunder')) {
        selectedTip = weatherTips[5];
      } else if (condition.includes('fog') || condition.includes('mist')) {
        selectedTip = weatherTips[7];
      } else if (condition.includes('wind')) {
        selectedTip = weatherTips[9];
      } else {
        // Random tip if no specific condition matches
        const randomIndex = Math.floor(Math.random() * weatherTips.length);
        selectedTip = weatherTips[randomIndex];
      }
      
      setTip(selectedTip);
    } else {
      // Random tip if no weather data
      const randomIndex = Math.floor(Math.random() * weatherTips.length);
      setTip(weatherTips[randomIndex]);
    }
  }, [currentWeather]);
  
  return (
    <Widget>
      <WidgetTitle>
        <FontAwesomeIcon icon={faLightbulb} /> Weather Tip
      </WidgetTitle>
      <div>{tip}</div>
    </Widget>
  );
};

const WidgetsContainer = () => {
  return (
    <WidgetsWrapper>
      <ClockWidget />
      <LocationWidget />
      <TipsWidget />
    </WidgetsWrapper>
  );
};

export default WidgetsContainer;