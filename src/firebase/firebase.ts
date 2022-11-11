import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAVpt7yLW2diDbE5jUozpVaO3Pm3x1rTa8",
  authDomain: "noteballs-app-vue3.firebaseapp.com",
  projectId: "noteballs-app-vue3",
  storageBucket: "noteballs-app-vue3.appspot.com",
  messagingSenderId: "257817812818",
  appId: "1:257817812818:web:f48e08bbce4e0369cba48b"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth =  getAuth(app)


export {
    db,
    auth
}