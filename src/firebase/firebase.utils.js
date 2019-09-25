import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyBRbdhk7gtAQ1ffwNXv-LZqGpnnRqkvSbs",
	authDomain: "clothingcomm.firebaseapp.com",
	databaseURL: "https://clothingcomm.firebaseio.com",
	projectId: "clothingcomm",
	storageBucket: "",
	messagingSenderId: "411648587786",
	appId: "1:411648587786:web:dce80a264d40a5ea9207f3",
	measurementId: "G-TS8G6JGHND"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;