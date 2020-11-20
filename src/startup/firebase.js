import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAYcRchE2n0BXwvye9ia7JLygHUkMAsERk",
    authDomain: "authentication-netninja-af413.firebaseapp.com",
    databaseURL: "https://authentication-netninja-af413.firebaseio.com",
    projectId: "authentication-netninja-af413",
    storageBucket: "authentication-netninja-af413.appspot.com",
    messagingSenderId: "489780848017",
    appId: "1:489780848017:web:da5343cd6ade5a60846630"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire.auth();