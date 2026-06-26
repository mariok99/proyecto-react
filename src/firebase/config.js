// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBlJMIBQ8zDQRAs7cXnRPRt5idBJ8W1Iu8",
    authDomain: "react-talento-tech.firebaseapp.com",
    projectId: "react-talento-tech",
    storageBucket: "react-talento-tech.firebasestorage.app",
    messagingSenderId: "993370492972",
    appId: "1:993370492972:web:57bfe14d4ca1f311a00189",
    measurementId: "G-92CMKZP874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);