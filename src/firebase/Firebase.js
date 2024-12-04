import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDy7IHkEZZp2ZPUuJk-eHZEmpDKwxgpgmQ",
    authDomain: "loginsystemapp-ac6f2.firebaseapp.com",
    projectId: "loginsystemapp-ac6f2",
    storageBucket: "loginsystemapp-ac6f2.firebasestorage.app",
    messagingSenderId: "36468543808",
    appId: "1:36468543808:web:da88af4c62c012bf652aa5",
    measurementId: "G-DTPSYLF1QS"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Google Login
const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

// Email/Password Login
const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export { auth, signInWithGoogle, signInWithEmail, signOut };
