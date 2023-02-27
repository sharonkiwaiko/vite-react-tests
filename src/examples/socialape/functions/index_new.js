const functions = require("firebase-functions");
const app = require("express")();
const {FBAuth}= require('./util/fbAuth')
const {getAllScreams,postOneScream}= require('./handlers/screams')
const {signup,login,uploadImage}= require('./handlers/users')

//////////////////////////////////
// ROUTES
//////////////////////////////////
//scream
app.get("/screams", getAllScreams)
app.post("/scream", FBAuth,postOneScream)  
//users
app.post("/signup", signup);
app.post("/login", login);
app.post("/user/image", uploadImage);
exports.api = functions.region("europe-west1").https.onRequest(app);
