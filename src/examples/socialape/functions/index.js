const functions = require("firebase-functions");
const admin = require("firebase-admin");
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

app.get("/screams", (req, res) => {
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

app.post("/scream", (req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
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
//signup route
app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };
  //TODO validate data
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
    
    exports.api = functions.region("europe-west1").https.onRequest(app);
});
