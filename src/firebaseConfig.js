// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGJuLiE-3_IASpmnacS1eloM8CQ6gxQ8s",
  authDomain: "clone-whatsapp-5a4e1.firebaseapp.com",
  projectId: "clone-whatsapp-5a4e1",
  storageBucket: "clone-whatsapp-5a4e1.appspot.com",
  messagingSenderId: "902185202518",
  appId: "1:902185202518:web:7730a5cc2064a3f01a5cf7",
  measurementId: "G-6E4ZLVH6X7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
