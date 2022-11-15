// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvJNVAqqtfwdabWeoXgu6hakczbAsiGnk",
  authDomain: "whatsapp-3ecfc.firebaseapp.com",
  projectId: "whatsapp-3ecfc",
  storageBucket: "whatsapp-3ecfc.appspot.com",
  messagingSenderId: "918736858809",
  appId: "1:918736858809:web:9cd7be5701f8c4a2ec3568",
  measurementId: "G-XBDHT7NBMX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
