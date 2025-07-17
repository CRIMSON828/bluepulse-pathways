import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDFv7k615VlXXQS6KvT-DjxVbhpn2i5xNo",
  authDomain: "bluepulse-pathways.firebaseapp.com",
  projectId: "bluepulse-pathways",
  storageBucket: "bluepulse-pathways.firebasestorage.app",
  messagingSenderId: "667963287752",
  appId: "1:667963287752:web:7b1b3d0a66bd168c285dfd"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
