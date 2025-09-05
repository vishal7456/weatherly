import React from 'react';
import styled from 'styled-components';
import { useWeather } from '../../context/WeatherContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faThermometerHalf } from '@fortawesome/free-solid-svg-icons';

const SettingsContainer = styled.div`
  padding: 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const SettingsCard = styled.div`
  background-color: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SettingsHeader = styled.h2`
  font-size: 2rem;
  color: var(--blue);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SettingSection = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(211, 211, 211, 0.1);
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--orange);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const SettingRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SettingLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

const SettingName = styled.span`
  font-weight: 500;
  color: var(--grey);
`;

const SettingDescription = styled.span`
  font-size: 0.85rem;
  color: rgba(211, 211, 211, 0.7);
  margin-top: 0.25rem;
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: var(--transition);
    border-radius: 34px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: var(--transition);
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: var(--blue);
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px var(--blue);
  }
  
  input:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const UnitToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UnitLabel = styled.span`
  font-size: 0.9rem;
  color: ${props => props.active ? 'var(--blue)' : 'var(--grey)'};
  font-weight: ${props => props.active ? '500' : 'normal'};
`;

const Settings = () => {
  const { units, toggleUnits } = useWeather();
  const isMetric = units === 'metric';
  
  return (
    <SettingsContainer>
      <SettingsCard>
        <SettingsHeader>
          <FontAwesomeIcon icon={faCog} /> Settings
        </SettingsHeader>
        
        <SettingSection>
          <SectionTitle>
            <FontAwesomeIcon icon={faThermometerHalf} /> Units
          </SectionTitle>
          
          <SettingRow>
            <SettingLabel>
              <SettingName>Temperature Unit</SettingName>
              <SettingDescription>Choose between Celsius and Fahrenheit</SettingDescription>
            </SettingLabel>
            
            <UnitToggle>
              <UnitLabel active={isMetric}>°C</UnitLabel>
              <ToggleSwitch>
                <input 
                  type="checkbox" 
                  checked={!isMetric} 
                  onChange={toggleUnits} 
                />
                <span className="slider"></span>
              </ToggleSwitch>
              <UnitLabel active={!isMetric}>°F</UnitLabel>
            </UnitToggle>
          </SettingRow>
        </SettingSection>
      </SettingsCard>
    </SettingsContainer>
  );
};

export default Settings;