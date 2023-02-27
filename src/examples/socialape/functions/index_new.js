const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {getAllScreams}= require('./handlers/screams')
const {signup,login}= require('./handlers/users')



const app = require("express")();
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyB0kWXrKqviuaF61GJOP_UFFFO-yQKjE14",
  authDomain: "socialape-78488.firebaseapp.com",
  databaseURL:
    "https://socialape-78488-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "socialape-78488",
  storageBucket: "socialape-78488.appspot.com",
  messagingSenderId: "472174416647",
  appId: "1:472174416647:web:18b495eaf7f47b149a2ba2",
};
firebase.initializeApp(firebaseConfig);

//scream routes
app.get("/screams", getAllScreams)
app.post("/scream", FBAuth,postOneScream)  
//users routes
app.post("/signup", signup);
app.post("/login", login);


// https://baseurl.com/api/

///////////////////////////////////////////////////////////////////////

 /////////////////////////////////////////////////////////////////   


//exports.api = functions.https.onRequest(app);

// u can try better region
//exports.api = functions.region("europe-west1").https.onRequest(app);
const isEmail = (email) => {
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
 if(email.match(regex)) return true;
   else return false;
  
}
const isEmpty = (string) => {
  if(string.trim() === '') return true;
  else return false;
}


    
    exports.api = functions.region("europe-west1").https.onRequest(app);
//});
