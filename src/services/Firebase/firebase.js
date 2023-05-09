// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFwO2qEMVQbW9XAYAOwjPAHOQhLMVNjAI",
  authDomain: "jbl-base.firebaseapp.com",
  databaseURL: "https://jbl-base-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "jbl-base",
  storageBucket: "jbl-base.appspot.com",
  messagingSenderId: "1011228218925",
  appId: "1:1011228218925:web:6477e94f557759340b0aa4"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;