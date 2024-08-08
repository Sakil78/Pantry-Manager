// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvQ4dhpnUuoiD-vkfbTi6ZTqnD0y3MPgA",
  authDomain: "pantrymanager-c0843.firebaseapp.com",
  projectId: "pantrymanager-c0843",
  storageBucket: "pantrymanager-c0843.appspot.com",
  messagingSenderId: "381692858592",
  appId: "1:381692858592:web:da0b03cd2c053ee4e98085"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);


export { auth, db, storage };
