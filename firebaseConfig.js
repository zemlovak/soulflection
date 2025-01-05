// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD9ZbJW-dB8qTvyE5AsQkQIpYXOZGBPsE0" /* import.meta.env.FIREBASE_API_KEY */,
  authDomain: "soulflection-95fc9.firebaseapp.com",
  projectId: "soulflection-95fc9",
  storageBucket: "soulflection-95fc9.appspot.com",
  messagingSenderId: "658987669987",
  appId: "1:658987669987:web:28112eedb9a9b45b7468d6",
  measurementId: "G-DM1ZHREL23",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
