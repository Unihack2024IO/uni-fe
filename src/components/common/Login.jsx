import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { GoogleOAuthProvider } from '@react-oauth/google';


// Your Google Client ID
const CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID';

ReactDOM.render(
    <ChakraProvider>
        <GoogleOAuthProvider clientId={CLIENT_ID}>

        </GoogleOAuthProvider>
    </ChakraProvider>,
    document.getElementById('root')
);
