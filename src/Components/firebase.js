import { initializeApp } from 'firebase/app';
import { getFirestore } from  'firebase/firestore';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDi0WftJhfGVZp13grD_3Lqq_UskHmMVKA",
    authDomain: "amvs-b37e0.firebaseapp.com",
    projectId: "amvs-b37e0",
    storageBucket: "amvs-b37e0.appspot.com",
    messagingSenderId: "778966356726",
    appId: "1:778966356726:web:718366f117d0220c8392d7",
    measurementId: "G-DJT1JNYT2L"
};

const app = initializeApp(firebaseConfig);
export default getFirestore();