import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
		apiKey: "AIzaSyA379ePVG4hRN_-MF3yFokc8J5MppsI01o",
		authDomain: "facebook-messenger-clone-90d08.firebaseapp.com",
		databaseURL: "https://facebook-messenger-clone-90d08.firebaseio.com",
		projectId: "facebook-messenger-clone-90d08",
		storageBucket: "facebook-messenger-clone-90d08.appspot.com",
		messagingSenderId: "1001655044130",
		appId: "1:1001655044130:web:ba387a5b655f4ddb13627b",
		measurementId: "G-RSCBHFF8LW"
})

const db = firebaseApp.firestore();
export default db;