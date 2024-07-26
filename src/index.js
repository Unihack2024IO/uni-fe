import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import theme from './theme'; // Ensure you have a theme file
import Home from './pages/Home';
import Destination from './pages/Destination';
import UserPersona from './pages/UserPersona';
import TripSuggestion from './pages/TripSuggestion';
import Advisor from './components/destination/Advisor';
// Your Google Client ID
const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/userpersona" element={<UserPersona />} />
            <Route path="/tripsuggestion" element={<TripSuggestion />} />
            <Route path="/advisor" element={<Advisor />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
