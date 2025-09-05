import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  flex: 1;
  background-color: var(--dark-grey);
  padding: 1rem;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`;

const MainColumn = styled.main`
  flex: 4;
  padding: 1rem;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    order: 3;
    width: 100%;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  background-color: var(--dark-grey);
  padding: 1rem;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    order: 2;
    width: 100%;
  }
`;

const DashboardLayout = ({ leftContent, rightContent }) => {
  return (
    <LayoutContainer>
      <LeftColumn>
        {leftContent}
      </LeftColumn>
      
      <MainColumn>
        <Outlet />
      </MainColumn>
      
      <RightColumn>
        {rightContent}
      </RightColumn>
    </LayoutContainer>
  );
};

export default DashboardLayout;