
const isEmail = (email) => {
  const regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
 if(email.match(regex)) return true;
   else return false;
  
}
const isEmpty = (string) => {
  if(string.trim() === '') return true;
  else return false;
}

exports.validateSignupData = (data) => {
let errors = {};
  if(isEmpty(data.email)){
  errors.email = 'Email must not be empty'
  } else if(!isEmail(data.email)){
   errors.email = 'Email must be a valid email address'
  }
  
  if(isEmpty(data.password)) errors.password =  'password must not be empty'
  if(data.password != data.confirmPassword errors.confirmPassword =  'passwords must match'
  if(isEmpty(data.handle)) errors.handle =  'must not be empty'
  
  if(Object.keys(errors).length>0) return res.status(400).json(errors);
  // miss a key will trigger unexpected error we dont cover

return{
errors,
  valid: Object.keys(errors).length === 0 ? true : false
}
}

exports.validateLoginData = (data) => {
let errors = {};
    if(isEmpty(user.email)) errors.email =  'must not be empty';
    if(isEmpty(user.password)) errors.password =  'must not be empty';
    
 // if(Object.keys(errors).length>0) return res.status(400).json(errors);
  return{
errors,
  valid: Object.keys(errors).length === 0 ? true : false
}
}
