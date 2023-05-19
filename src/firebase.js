// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX6gPf9m8vy9Sh611Q94wtdv92UDUgBjA",
  authDomain: "my-museum-proyects.firebaseapp.com",
  databaseURL: "https://my-museum-proyects-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-museum-proyects",
  storageBucket: "my-museum-proyects.appspot.com",
  messagingSenderId: "782480020653",
  appId: "1:782480020653:web:d5e3bfe47283e04ac6e224",
  measurementId: "G-7Q5LYD5N4L"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const database = getDatabase(app);

export default database;
