// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtECV5iPvZ6Yoo5WUBNPE3dF1eGKQcG0I",
    authDomain: "luispazdev-bcaed.firebaseapp.com",
    projectId: "luispazdev-bcaed",
    storageBucket: "luispazdev-bcaed.appspot.com",
    messagingSenderId: "726436576085",
    appId: "1:726436576085:web:681f37f664097d27facddc",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
