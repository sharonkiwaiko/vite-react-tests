module exports =  (req, res , next)=>{
  let idToken
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
