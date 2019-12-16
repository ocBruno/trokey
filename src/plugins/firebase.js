import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyB2Bbl8wm5vz97Tfy6NTTMxSSShTRXZICw',
    authDomain: 'trokey-7e335.firebaseapp.com',
    databaseURL: 'https://trokey-7e335.firebaseio.com',
    projectId: 'trokey-7e335',
    storageBucket: 'trokey-7e335.appspot.com',
    messagingSenderId: '391561427752',
    appId: '1:391561427752:web:98925b2a3aecae53dbae1d',
    measurementId: 'G-SJW9X2FN65'
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}

const fireDb = firebase.firestore()
export { fireDb }
