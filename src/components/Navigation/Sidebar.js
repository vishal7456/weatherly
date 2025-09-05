import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCog } from '@fortawesome/free-solid-svg-icons';

const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: var(--blue);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;

  img {
    width: 50px; /* Adjust size as needed */
    height: 50px; /* Adjust size as needed */
    border-radius: 50%; /* Makes the image circular */
    margin-right: 0.5rem;
  }
  text-align: center;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled.li`
  width: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 4px;
  color: var(--grey);
  transition: var(--transition);
  
  &:hover {
    background-color: rgba(30, 144, 255, 0.1);
    color: var(--blue);
  }
  
  &.active {
    background-color: var(--blue);
    color: white;
  }
  
  svg {
    margin-right: 0.75rem;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Logo><img src="/Weatherly.jpg" alt="Weatherly Logo" />Weatherly</Logo>
      <NavMenu>
        <NavItem>
          <StyledNavLink to="/" end>
            <FontAwesomeIcon icon={faHome} /> Dashboard
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/about">
            <FontAwesomeIcon icon={faInfoCircle} /> About
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/settings">
            <FontAwesomeIcon icon={faCog} /> Settings
          </StyledNavLink>
        </NavItem>
      </NavMenu>
    </SidebarContainer>
  );
};

export default Sidebar;