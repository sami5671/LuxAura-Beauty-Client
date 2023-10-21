// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6XDpCrClpez_rojpPzckP2xjmlBVt24U",
  authDomain: "luxaura-beauty-client.firebaseapp.com",
  projectId: "luxaura-beauty-client",
  storageBucket: "luxaura-beauty-client.appspot.com",
  messagingSenderId: "112700629043",
  appId: "1:112700629043:web:847fdd9decdedd9bf50346",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
