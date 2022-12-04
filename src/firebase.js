import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCf2e4hnlIP9u9JFoADWYL77s9TruU_Tbk",
  authDomain: "qeuer-22e71.firebaseapp.com",
  databaseURL: "https://qeuer-22e71-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "qeuer-22e71",
  storageBucket: "qeuer-22e71.appspot.com",
  messagingSenderId: "206603935311",
  appId: "1:206603935311:web:31643f8d5cc94bb883543a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
