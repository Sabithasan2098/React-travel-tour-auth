// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvdspKyz66aDYImNLZmbDuK7A7ILrly7g",
  authDomain: "react-tour-auth.firebaseapp.com",
  projectId: "react-tour-auth",
  storageBucket: "react-tour-auth.appspot.com",
  messagingSenderId: "239803486383",
  appId: "1:239803486383:web:31cf9d6cc08a5fea81845a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;