import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAPFzulY09PAyhrWcNMEPqzhZiXawOKiL0",
  authDomain: "food-app-firebase-b4792.firebaseapp.com",
  databaseURL:
    "https://food-app-firebase-b4792-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "food-app-firebase-b4792",
  storageBucket: "food-app-firebase-b4792.appspot.com",
  messagingSenderId: "823369558255",
  appId: "1:823369558255:web:de55d6d3ea60d48408531a",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
