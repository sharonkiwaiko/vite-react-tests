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



// https://baseurl.com/api/

///////////////////////////////////////////////////////////////////////
const FBAuth = (req, res , next){
  //next if we want to perceed 
if(req.headers.authorization && req.headers.authorization.startsWith(Bearer '){
  idToken = req.headers.authorization.split('Bearer ')[1]
   }else{
  console.error('No token found')
   return res.status(403).json({error:'unauthorized'});
}
  admin.auth().veryfyIdToken(idToken)
.then(decodedToken=>{
    req.user = decodedToken;
   // we need to get the handle in users collection
    console.log(decodedToken)
    return db.collection('users')
    .where('userId', '==' , req.user.uid)
    .limit(1)//limit results to one doc
    .get();
  })  
  
.then(data=>{
  //because this is a db collection querry even if we request 1 we get an array so we need [0]  
    req.user.handle = data.docs[0].data().handle()
    return next()
  })
  .catch(err=>{
    console.error('error while verifying token',err);
    return res.status(403).json(err);
      })
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

//signup route
app.post("/signup", signup);
    
    //signup login
    app.post("/login", login);
    
    exports.api = functions.region("europe-west1").https.onRequest(app);
//});
