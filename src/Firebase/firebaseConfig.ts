// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq-WklH3JM7MomEj9bmXirNLWDlR_72Ng",
  authDomain: "proyecto-react-91a7e.firebaseapp.com",
  projectId: "proyecto-react-91a7e",
  storageBucket: "proyecto-react-91a7e.firebasestorage.app",
  messagingSenderId: "754850073369",
  appId: "1:754850073369:web:d17d01aa6188a8e8c3d388",
  measurementId: "G-57JJQNH4D2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);

export { db };