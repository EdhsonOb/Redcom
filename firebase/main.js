// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuicdHmEnN6XdOQALcEvO-FZ_veTsgqnw",
  authDomain: "redcom-fddd1.firebaseapp.com",
  projectId: "redcom-fddd1",
  storageBucket: "redcom-fddd1.appspot.com",
  messagingSenderId: "505603858817",
  appId: "1:505603858817:web:125cdac272b6116d7d8880",
  measurementId: "G-5D7LN3V4XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);