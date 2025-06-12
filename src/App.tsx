import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CityDashboard from './components/CityDashboard';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<CityDashboard />} />
          <Route path="/city/:cityName" element={<CityDashboard />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App; 