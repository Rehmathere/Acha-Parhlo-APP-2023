import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCpCthp0DyhjLpm5zbI5G1C_bCkY6Hqde8",
    authDomain: "awpro-f81b1.firebaseapp.com",
    databaseURL: "https://awpro-f81b1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "awpro-f81b1",
    storageBucket: "awpro-f81b1.appspot.com",
    messagingSenderId: "313818198041",
    appId: "1:313818198041:web:b9e32aa1fc2bcc2c193a88"
    //   @deprecated is deprecated Constants.manifest
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();