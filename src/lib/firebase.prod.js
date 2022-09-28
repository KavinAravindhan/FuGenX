import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyCToElAQuMvlo-m5xq8Uk_nD9Z6beadWvc",
    authDomain: "netflix-7f430.firebaseapp.com",
    projectId: "netflix-7f430",
    storageBucket: "netflix-7f430.appspot.com",
    messagingSenderId: "516802596991",
    appId: "1:516802596991:web:77e8832809b5a7b7572f4a",
    measurementId: "G-QPLR06302L"
};

const firebase = Firebase.initializeApp(config);

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };