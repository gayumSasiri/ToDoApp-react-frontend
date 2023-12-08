// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9wW5RDfbfEua0H1g2SA-OoglHm7CYrQU",
    authDomain: "to-do-app-99.firebaseapp.com",
    projectId: "to-do-app-99",
    storageBucket: "to-do-app-99.appspot.com",
    messagingSenderId: "198748835997",
    appId: "1:198748835997:web:edc9facc283c58aaf30474",
    measurementId: "G-SMLHXN3WVQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth};
