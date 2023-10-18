import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDpUWrk5okIj9jRmnjcVBoSzhEltupw4YY",
  authDomain: "brand-shop-68273.firebaseapp.com",
  projectId: "brand-shop-68273",
  storageBucket: "brand-shop-68273.appspot.com",
  messagingSenderId: "581311356590",
  appId: "1:581311356590:web:87309fb8ac9dfcc491d73f"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
