import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBLe4E4Oo9vXDpqQ3_beU5BpuxfyuwLX_M",
  authDomain: "nextjs-disney-plus-clone.firebaseapp.com",
  projectId: "nextjs-disney-plus-clone",
  storageBucket: "nextjs-disney-plus-clone.appspot.com",
  messagingSenderId: "400114780630",
  appId: "1:400114780630:web:627e7bce6cb5602657fc77"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
