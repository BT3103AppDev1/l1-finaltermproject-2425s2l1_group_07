// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD43V2HIX_PDP5P6fxktVPXjhh1Lv994LU",
    authDomain: "bt3103-matchup.firebaseapp.com",
    databaseURL: "https://bt3103-matchup-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "bt3103-matchup",
    storageBucket: "bt3103-matchup.firebasestorage.app",
    messagingSenderId: "132707622798",
    appId: "1:132707622798:web:b30dcd6dd26c639400cedf",
    measurementId: "G-EY15PSDKMD"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase modules
export const auth = getAuth(app);
export const database = getDatabase(app);
export const db = getFirestore(app);
export default app;
