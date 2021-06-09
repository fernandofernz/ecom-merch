import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAMgoFlcxQWKmapke2AiqgajSOD2eHs3-w",
    authDomain: "ecom-merch.firebaseapp.com",
    projectId: "ecom-merch",
    storageBucket: "ecom-merch.appspot.com",
    messagingSenderId: "116494016095",
    appId: "1:116494016095:web:580e1477b73ef6025f05ea",
    measurementId: "G-BC2JQCYJYF"
};
try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}
const fire = firebase;
export default fire;