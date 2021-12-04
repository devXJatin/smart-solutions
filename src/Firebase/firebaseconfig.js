import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDzoL6Dw2L95f3dtRn0rJ2Yc9IE9dfheVQ",
    authDomain: "smart-solutions-49b73.firebaseapp.com",
    projectId: "smart-solutions-49b73",
    storageBucket: "smart-solutions-49b73.appspot.com",
    messagingSenderId: "70376318457",
    appId: "1:70376318457:web:ed939946c42066288a8928"
  };
  

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);