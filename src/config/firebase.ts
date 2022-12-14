import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBapTWUl-2xE7zL8Y9dckmou6oEVfGpRNk",
  authDomain: "pablo-y-gaby.firebaseapp.com",
  projectId: "pablo-y-gaby",
  storageBucket: "pablo-y-gaby.appspot.com",
  messagingSenderId: "815485905933",
  appId: "1:815485905933:web:d5834c7abd4c016a7c3944",
  measurementId: "G-KS2WBVJE53",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
const db = getFirestore(app);
export { db };
