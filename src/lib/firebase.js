import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5ATBK1RjqgWPj7TkxFod87kTTDt_mgCA',
  authDomain: 'e-commerce-app-d7462.firebaseapp.com',
  projectId: 'e-commerce-app-d7462',
  storageBucket: 'e-commerce-app-d7462.appspot.com',
  messagingSenderId: '36157575748',
  appId: '1:36157575748:web:464253461df749bf8be211',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// const logout = async () => {
//   await signOut(auth);
// };

export { app, auth, db };
