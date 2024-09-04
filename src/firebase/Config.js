import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDUeZPOzZ7Qa46i18GQkOlSDfHbW_dchyo',
	authDomain: 'thecno-shop.firebaseapp.com',
	projectId: 'thecno-shop',
	storageBucket: 'thecno-shop.appspot.com',
	messagingSenderId: '1070875383453',
	appId: '1:1070875383453:web:72ceb81f2edf3aaf46a674',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);