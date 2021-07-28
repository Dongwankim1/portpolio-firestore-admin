import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDk7ZMk-XnlVa76tZJK77s0jF6s38VFPIo",
    authDomain: "save-else.firebaseapp.com",
    projectId: "save-else",
    storageBucket: "save-else.appspot.com",
    messagingSenderId: "266060802018",
    appId: "1:266060802018:web:012119915f164fa1c87bbb",
    measurementId: "G-MWKFR01KZT"
  };


const fire = firebase.initializeApp(firebaseConfig);


export default fire;