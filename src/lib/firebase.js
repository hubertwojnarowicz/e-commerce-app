import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1kFJHGSNS8cuRuPyvSvqhuE_usUPbxg0",
  authDomain: "e-commerce-project-b37ec.firebaseapp.com",
  projectId: "e-commerce-project-b37ec",
  storageBucket: "e-commerce-project-b37ec.appspot.com",
  messagingSenderId: "1069663769736",
  appId: "1:1069663769736:web:b98d5d50582b2ee5bd7b3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const logout = async () => {
//   await signOut(auth);
// };

export { app, auth, db };
