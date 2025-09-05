import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './context/WeatherContext';
import GlobalStyles from './styles/GlobalStyles';
import DashboardLayout from './components/Layout/DashboardLayout';
import Sidebar from './components/Navigation/Sidebar';
import WidgetsContainer from './components/Widgets/WidgetsContainer';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Settings from './pages/Settings';

function App() {
  return (
    <WeatherProvider>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route 
            path="/" 
            element={
              <DashboardLayout 
                leftContent={<Sidebar />} 
                rightContent={<WidgetsContainer />} 
              />
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="about" element={<About />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;
