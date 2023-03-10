const{db} = require('../util/admin')
exports.getAllScreams =(req,res)=> {
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
    .catch((err) => {
      console.error(err);
      res.status(500).json({error:err.code})
    });
}
exports.postOneScreams = (req, res) => {
  
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
  /* admin.firestore() */
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
