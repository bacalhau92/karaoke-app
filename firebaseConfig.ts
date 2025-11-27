import * as firebaseApp from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXNocgMJagpsfWW3tUuS4Lfi73kMkvlDY",
  authDomain: "karaoke-7ed09.firebaseapp.com",
  projectId: "karaoke-7ed09",
  storageBucket: "karaoke-7ed09.firebasestorage.app",
  messagingSenderId: "825910090016",
  appId: "1:825910090016:web:abadee866ac976e3df1f45",
  measurementId: "G-0D04BPL6GF"
};

// Inicializa o Firebase
let app;
let dbInstance;

try {
  app = firebaseApp.initializeApp(firebaseConfig);
  dbInstance = getFirestore(app);
} catch (error) {
  console.error("Erro ao inicializar Firebase:", error);
}

export const db = dbInstance;