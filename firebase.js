import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAhzp6YNf5qAvLG-8uIK9qtPNNmcD8M998",
  authDomain: "sudacoin-8437a.firebaseapp.com",
  projectId: "sudacoin-8437a",
  storageBucket: "sudacoin-8437a.firebasestorage.app",
  messagingSenderId: "293986650729",
  appId: "1:293986650729:web:45d64c9d84c1c1f299b0f8"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app
