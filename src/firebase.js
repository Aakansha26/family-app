import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBdtJt886_Oe7rN1glJx_2IL0wo9ilJx1g",
    authDomain: "family-app-971f0.firebaseapp.com",
    projectId: "family-app-971f0",
    storageBucket: "family-app-971f0.appspot.com",
    messagingSenderId: "596769863700",
    appId: "1:596769863700:web:7280acae0f59c6c4100f01",
    measurementId: "G-06XL5ML5N0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;