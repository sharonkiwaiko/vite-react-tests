const functions = require("firebase-functions");
const admin = require("firebase-admin");
const {getAllScreams}= require('./handlers/screams')



admin.initializeApp();
/*
const expresss = require("express");
const app = expresss();
short way:
*/
const db = admin.firestore();
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

app.get("/screams", (req, res , next) => {
  /*
  admin
    .firestore()
    */
  db
    .collection("screams")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) => {
        screams.push({
          screamId: doc.id,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
        });
      });
      return res.json(screams);
    })
    .catch((err) => console.error(err));
});
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

app.post("/scream", FBAuth,(req, res) => {
  
  //by the time we got here we got verifyied by the middleware FBAuth
  if(req.body.body.trim()===''){
  return res.status(400).json({body:'body must not be empty'})
  }
    
  const newScream = {
    body: req.body.body,
    //userHandle: req.body.userHandle, 
    //this was before middleware, now we get the user
    userHandle: req.user.handle, 
    
    createdAt: new Date().toISOString(),
    //createdAt: admin.firestore.TimeStamp.fromDate(new Date()),
  };
  /*
  admin
    .firestore()
    */
  db
    .collection("screams")
    .add(newScream)
    .then((doc) => {
      res.json({ message: `document ${doc.id} created successfuly` });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.error(err);
    });
});

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
app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };
  let errors = {};
  if(isEmpty(newUser.email)){
  errors.email = 'Email must not be empty'
  } else if(!isEmail(newUser.email)){
   errors.email = 'Email must be a valid email address'
  }
  
  if(isEmpty(newUser.password)) errors.password =  'password must not be empty'
  if(newUser.password != newUser.confirmPassword errors.confirmPassword =  'passwords must match'
  if(isEmpty(newUser.handle)) errors.handle =  'must not be empty'
  
  if(Object.keys(errors).length>0) return res.status(400).json(errors);
  // miss a key will trigger unexpected error we dont cover
  //TODO validate data
  ////////////////////////////////////////
  let token,userId;
  db.doc(`/users/`${newUser.handle}`).get()
  .then(doc => {
  if(doc.exists){
  return res.status(400).json({handle:'this handle is already taken'})
  } else {
  return firebase
  /////
    .auth()
    .createUserWithEmaiAndPassword(newUser.email, newUser.password);
    }
    })
    .then(data => {
    userId = data.user.uid;
    return data.user.getIdToken()
    })
    .then(idToken => {
    token=idToken;
    //  return res.status(201).json({token});
    const userCredantials = {
    handle:newUser.handle,
    email:newUser.email,
    createdAt: new Date().toISOString(),
    userId
    }
    return db.doc(`/users/${newUser.handle}`).set(userCredentials);
     })
     .then((data)=>{
    return res.status(201).json({token});
    })
      .catch((err) => {
      console.error(err);
      if(err.code === 'auth/email-already-in-use')
       return res.status(400).json({ email: 'Email already in use' });
       } else {
      return res.status(500).json({ error: err.code });
    });
    
    //signup login
    app.post("/login", (req, res) => {
      const user = {
      email:req.body.email,
      password:req.body.password
        }
    let errors = {};
    if(isEmpty(user.email)) errors.email =  'must not be empty';
    if(isEmpty(user.password)) errors.password =  'must not be empty';
    if(Object.keys(errors).length>0) return res.status(400).json(errors);
    firebase.auth().signInWithEmailAndPassword(user.email,user.password)
    then(data =>{
    return data.user.getIdToken()
    })
    .then (token => {
     return res.json({token});
     })
     .catch(err => {
      console.error(err);
      if(err.code === 'auth/wrong-password')
      {
       return res.status(403).json({general:'wrong credentials, please try again'});
       } else return res.status(500).json({error:err.code});
       });
    });
    
    exports.api = functions.region("europe-west1").https.onRequest(app);
//});
