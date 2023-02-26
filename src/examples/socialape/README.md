mkdir socialape-functions

after cd to th folder, run:
firebase init
vit space on functions (mark)

we get a firebase config file that has our project id
{
"projects":"socialape-dfge883"
}

in the folder functions > index.js
we have a basic hello world function
exports.helloworld = functions.https.onRequest((request,response) => {
response.send('hello world')
})

after we unremark
firebase deploy

we get an end point which we can call and get a response
on the terminal we get function URL

WE CHECK THIS ON POSTMAN ON GET , PASTE THE URL
AND

CREATE A DATABASE
ON FIREBASE
click database create database

userHandle:string
body:string
createdAt:timestamp

-locked mode
-test mode --choose

Add Firebase to your web app

created index.js look at the codw


we get a link 
open postman paste link
POST 
Body
checkbox raw
JSON
and type
{
"body":"new scream",
"userHandle":"new",
}


firebase.deploy
userHandle:string
body:string
createdAt:timestamp