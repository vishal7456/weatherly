import React, { useState } from 'react';
import styled from 'styled-components';
import { useWeather } from '../../context/WeatherContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faLocationArrow } from '@fortawesome/free-solid-svg-icons';

const SearchContainer = styled.div`
  margin-bottom: 1.5rem;
`;

const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--dark-grey);
  border-radius: 4px;
  background-color: var(--dark-grey);
  color: var(--grey);
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    border-color: var(--blue);
    box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.2);
  }
  
  &::placeholder {
    color: rgba(211, 211, 211, 0.5);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: var(--blue);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: var(--orange);
  }
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`;

const LocationButton = styled(Button)`
  background-color: var(--dark-grey);
  border: 1px solid var(--blue);
  
  &:hover {
    background-color: rgba(30, 144, 255, 0.1);
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { fetchWeatherByCity, fetchWeatherByGeolocation, loading } = useWeather();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeatherByCity(query.trim());
    }
  };
  
  const handleLocationClick = () => {
    fetchWeatherByGeolocation();
  };
  
  return (
    <SearchContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput 
          type="text" 
          placeholder="Search for a city..." 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          disabled={loading}
        />
        <ButtonGroup>
          <Button type="submit" disabled={loading || !query.trim()}>
            <FontAwesomeIcon icon={faSearch} /> Search
          </Button>
          <LocationButton 
            type="button" 
            onClick={handleLocationClick} 
            disabled={loading}
          >
            <FontAwesomeIcon icon={faLocationArrow} />
          </LocationButton>
        </ButtonGroup>
      </SearchForm>
    </SearchContainer>
  );
};

export default SearchBar;