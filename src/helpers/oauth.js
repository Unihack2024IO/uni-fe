import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authFirebase } from "../config/firebaseConfig";
import axios from "axios";

const provider = new GoogleAuthProvider();

export const signIn = async () => {
  try {
    const result = await signInWithPopup(authFirebase, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    const API = `${process.env.REACT_APP_HOST}/auth/login`;
    const { data } = await axios.post(
      API,
      {
        email: user.email,
        name: user.displayName,
        phone: user.phoneNumber,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};
export const logOut = () => {};
