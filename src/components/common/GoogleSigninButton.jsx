import React from 'react';
import { Button } from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';

const GoogleSignInButton = () => {
    const handleSuccess = (response) => {
        // Handle the sign-in success here (e.g., send the token to your backend)
        console.log('Google Sign-In Successful', response);
    };

    const handleError = (error) => {
        // Handle the sign-in error here
        console.error('Google Sign-In Error', error);
    };

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
            buttonText="Sign in with Google"
            render={(renderProps) => (
                <Button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    colorScheme="teal"
                    size="lg"
                >
                    Sign in with Google
                </Button>
            )}
        />
    );
};

export default GoogleSignInButton;
