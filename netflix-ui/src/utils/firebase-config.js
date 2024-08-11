
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCNfNhKqCXlXjhmF5a77rna_x6ZY41m0Zk",
  authDomain: "react-netflix-clone-cf845.firebaseapp.com",
  projectId: "react-netflix-clone-cf845",
  storageBucket: "react-netflix-clone-cf845.appspot.com",
  messagingSenderId: "787512874279",
  appId: "1:787512874279:web:72812f178fecfb9b2e4502",
  measurementId: "G-DBJN1JSW2C"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);
