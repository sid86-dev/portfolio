import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: "portfolio-bfa2a.firebaseapp.com",
  projectId: "portfolio-bfa2a",
  storageBucket: "portfolio-bfa2a.appspot.com",
  messagingSenderId: "540737221842",
  appId: process.env.FIREBASE_APPID,
  measurementId: "G-2XR4VDTEYF",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);
