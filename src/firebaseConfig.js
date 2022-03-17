import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBc7Kncm9hRqqkxf-qvN-DxHi8c9-7zIYc",
    authDomain: "vue-3-2022.firebaseapp.com",
    projectId: "vue-3-2022",
    storageBucket: "vue-3-2022.appspot.com",
    messagingSenderId: "437721204864",
    appId: "1:437721204864:web:6827a521e3a8bb008a3e65",
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
