import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCIXj5GBCxrC496R2xhfx0JTY5G_AY5d3Y",
  authDomain: "finalproject-c3fe2.firebaseapp.com",
  databaseURL: "https://finalproject-c3fe2.firebaseio.com",
  projectId: "finalproject-c3fe2",
  storageBucket: "finalproject-c3fe2.appspot.com",
  messagingSenderId: "434679076739",
  appId: "1:434679076739:web:295295533990095b6308b6",
  measurementId: "G-QG9EL26MJG"
};

const fire = firebase.initializeApp(config);
export default fire;