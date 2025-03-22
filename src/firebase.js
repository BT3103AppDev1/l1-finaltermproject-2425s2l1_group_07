import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, doc, updateDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getDatabase } from "firebase/database";

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

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp);

export { collection, getDoc, onAuthStateChanged, doc, updateDoc };
