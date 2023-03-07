import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export const firebaseConfig = {
  apiKey: "AIzaSyCJSTTXOHKdt_sVcaAvCNW0vqVEHTuFSV4",
  authDomain: "asaanmed-c934d.firebaseapp.com",
  projectId: "asaanmed-c934d",
  storageBucket: "asaanmed-c934d.appspot.com",
  messagingSenderId: "125210385591",
  appId: "1:125210385591:web:5281e40407f4a3dda40132",
  measurementId: "G-S1964G6EMR"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}