// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIYTS4MdzxQi8vuEH-MDVmA0dVe6Zs3iw",
    authDomain: "ayurvedaplantdetection.firebaseapp.com",
    projectId: "ayurvedaplantdetection",
    storageBucket: "ayurvedaplantdetection.firebasestorage.app",
    messagingSenderId: "176329764301",
    appId: "1:176329764301:web:fcf29dbb443c159aa86884",
    measurementId: "G-ZY327R25L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
// export const auth = getAuth(app);
export { auth };