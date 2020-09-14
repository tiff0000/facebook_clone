import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCIeTabynEK8ZeE_JSlVYK5EqEhRe7sMjs",
  authDomain: "fb-clone-50a64.firebaseapp.com",
  databaseURL: "https://fb-clone-50a64.firebaseio.com",
  projectId: "fb-clone-50a64",
  storageBucket: "fb-clone-50a64.appspot.com",
  messagingSenderId: "418829394521",
  appId: "1:418829394521:web:8009c20eb6fba23190c748",
  measurementId: "G-7NDG0RRLGN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
