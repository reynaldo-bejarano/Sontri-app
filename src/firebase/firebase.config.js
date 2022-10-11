import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCYJ84vz7XLygrZNR8aAKFPJ51IHhNglzs",
    authDomain: "sontri-app.firebaseapp.com",
    projectId: "sontri-app",
    storageBucket: "sontri-app.appspot.com",
    messagingSenderId: "991367017171",
    appId: "1:991367017171:web:ac55d9f761f1eefcc05a26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)