import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faCode, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const AboutContainer = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const AboutCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const AboutHeader = styled.h2`
  font-size: 2rem;
  color: var(--blue);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const AboutSection = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--orange);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SectionContent = styled.div`
  line-height: 1.6;
  color: var(--grey);
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  
  &:before {
    content: '•';
    color: var(--blue);
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
`;

const TechBadge = styled.span`
  background-color: rgba(30, 144, 255, 0.1);
  color: var(--blue);
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutCard>
        <AboutHeader>
          <FontAwesomeIcon icon={faCloud} /> About Weather Dashboard
        </AboutHeader>
        
        <AboutSection>
          <SectionContent>
            Weather Dashboard is a modern, responsive web application designed to provide
            real-time weather information and forecasts. With an intuitive interface and
            comprehensive data visualization, it helps users stay informed about weather
            conditions anywhere in the world.
          </SectionContent>
        </AboutSection>
        
        <AboutSection>
          <SectionTitle>
            <FontAwesomeIcon icon={faCode} /> Features
          </SectionTitle>
          <SectionContent>
            <FeatureList>
              <FeatureItem>Real-time weather data from WeatherAPI.com</FeatureItem>
              <FeatureItem>Current weather conditions with detailed metrics</FeatureItem>
              <FeatureItem>5-day weather forecast</FeatureItem>
              <FeatureItem>Location search functionality</FeatureItem>
              <FeatureItem>Geolocation support for local weather</FeatureItem>
              <FeatureItem>Responsive design for all devices</FeatureItem>
              <FeatureItem>Unit toggle between Celsius and Fahrenheit</FeatureItem>
              <FeatureItem>Weather-related tips and information</FeatureItem>
              <FeatureItem>Real-time clock and date display</FeatureItem>
            </FeatureList>
            
            <TechStack>
              <TechBadge>React</TechBadge>
              <TechBadge>Styled Components</TechBadge>
              <TechBadge>WeatherAPI.com</TechBadge>
              <TechBadge>React Router</TechBadge>
              <TechBadge>Axios</TechBadge>
              <TechBadge>Font Awesome</TechBadge>
              <TechBadge>Context API</TechBadge>
            </TechStack>
          </SectionContent>
        </AboutSection>
        
        <AboutSection>
          <SectionTitle>
            <FontAwesomeIcon icon={faUserFriends} /> Credits
          </SectionTitle>
          <SectionContent>
            <p>Weather data provided by <a href="https://www.weatherapi.com/" target="_blank" rel="noopener noreferrer">WeatherAPI.com</a></p>
            <p>Icons by <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font Awesome</a></p>
            <p>Developed as part of a frontend development project</p>
          </SectionContent>
        </AboutSection>
      </AboutCard>
    </AboutContainer>
  );
};

export default About;