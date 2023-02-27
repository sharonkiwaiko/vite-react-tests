const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {getAllScreams}= require('./handlers/screams')
const {signup,login}= require('./handlers/users')
const {FBAuth}= require('./util/fbAuth')


const app = require("express")();
const firebase = require("firebase");


firebase.initializeApp(firebaseConfig);

//scream routes
app.get("/screams", getAllScreams)
app.post("/scream", FBAuth,postOneScream)  
//users routes
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.region("europe-west1").https.onRequest(app);
