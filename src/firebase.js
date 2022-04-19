// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { 
   getAuth,
   connectAuthEmulator,
   signInWithEmailAndPassword 
  } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApr3OIIV_Byk6e2O_B8RTrbH6kEjclG2s",
  authDomain: "daniel-games-af904.firebaseapp.com",
  projectId: "daniel-games-af904",
  storageBucket: "daniel-games-af904.appspot.com",
  messagingSenderId: "881616034371",
  appId: "1:881616034371:web:41d3bcea035f5ffeeed2f6",
  measurementId: "G-900SS289DV"
};
// Initialize Firebase
const firebaseApp =  initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getFirestore();
const storage = getStorage();


/// others 

// connectAuthEmulator(auth, 'http://localhost:9099');
const LoginEMailPassword  = async () => {
  const token =  JSON.parse(localStorage.getItem('userInfo'));
   await signInWithEmailAndPassword(auth, token.email, token.password)
  .then((userCredential) => {
    // Signed in 
     const user = userCredential.user;
     localStorage.setItem('token', JSON.stringify(user));
     window.location.reload();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("Email or password wrong !");
  });
}

export default firebaseApp;
export { db, storage, LoginEMailPassword};