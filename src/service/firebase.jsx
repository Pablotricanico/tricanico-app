// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4MlwNw9fzrhEa4WYEAQi2fM5pmpcglZk",
  authDomain: "tricanico-app.firebaseapp.com",
  projectId: "tricanico-app",
  storageBucket: "tricanico-app.firebasestorage.app",
  messagingSenderId: "1098609224062",
  appId: "1:1098609224062:web:49a7b06abd037da579ab2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)