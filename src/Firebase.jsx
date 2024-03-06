import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAyTt0F0or34xZ-0OEepKSK7v7kD2qhUVg",
  authDomain: "veracine-plus.firebaseapp.com",
  projectId: "veracine-plus",
  storageBucket: "veracine-plus.appspot.com",
  messagingSenderId: "808474494386",
  appId: "1:808474494386:web:254ca8d0d1201bbe9e50ab",
  measurementId: "G-7BG2CPB0CG"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, googleProvider, storage };
export default db;
