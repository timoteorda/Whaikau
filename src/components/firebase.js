// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtFRV_37Lns7zZb0rmT79CkCUNNGQJ4GU",
  authDomain: "whaikau-5808b.firebaseapp.com",
  projectId: "whaikau-5808b",
  storageBucket: "whaikau-5808b.appspot.com",
  messagingSenderId: "14025373731",
  appId: "1:14025373731:web:b726a7285805c68fba1996",
  measurementId: "G-8313LKVH45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);