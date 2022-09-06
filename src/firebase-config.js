import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBoArlSdkfdo8dWGBrtbgHynNpFH5IgKVA",
    authDomain: "react-firebase-crud-f7f21.firebaseapp.com",
    projectId: "react-firebase-crud-f7f21",
    storageBucket: "react-firebase-crud-f7f21.appspot.com",
    messagingSenderId: "429572198999",
    appId: "1:429572198999:web:192f2ce04c39555ad28912",
    measurementId: "G-W58XKC2YVX"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);