import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleSignInButton from "./GoogleSigninButton";

// Your Google Client ID
const CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";

export default function Login() {
  return (
    <>
      <ChakraProvider>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <GoogleSignInButton />
        </GoogleOAuthProvider>
      </ChakraProvider>
      ,
    </>
  );
}
