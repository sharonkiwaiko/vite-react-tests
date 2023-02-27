
const{db} = require('../util/admin')
const{validateSignupData,validateLoginData} = require('../util/validators')
const firebase = require("firebase");
config = require("../util/config");
firebase.initializeApp(config);
exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };
  const {valid, errors} = validateSignupData(newUser)
  if(!valid) return res.status(400).json(errors);
  
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
    }
   
   
   
   ///////////////////////////////////////////////////////////////
exports.login =(req, res) => {
      const user = {
      email:req.body.email,
      password:req.body.password
        }
        
        
     const {valid, errors} = validateLoginData(user)
    if(!valid) return res.status(400).json(errors)
  
  
    
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
    }
