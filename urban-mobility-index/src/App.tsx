import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import theme from './theme';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import CityIframePage from './pages/CityIframePage';
import StyleKitPage from './pages/StyleKitPage';
import NotFoundPage from './pages/NotFoundPage';
import ExternalSourcesPage from './pages/ExternalSourcesPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city/:cityName" element={<CityPage />} />
          <Route path="/city/:cityName/granular" element={<CityIframePage />} />
          <Route path="/stylekit" element={<StyleKitPage />} />
          <Route path="/external-sources" element={<ExternalSourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
