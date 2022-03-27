// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getStorage , ref} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChoeQomuLra2pmKKOJvIPw1UaavV1djUE",
  authDomain: "recetapp-b9a54.firebaseapp.com",
  projectId: "recetapp-b9a54",
  storageBucket: "recetapp-b9a54.appspot.com",
  messagingSenderId: "416661024150",
  appId: "1:416661024150:web:33a203ea965591997481b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);






const google =  new GoogleAuthProvider();
const facebook = new FacebookAuthProvider()
const db = getFirestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage(app);
// Create a storage reference from our storage service
const storageRef = ref(storage);
export{
    app,
    google,
    db,
    facebook,
    storage,
    storageRef
}