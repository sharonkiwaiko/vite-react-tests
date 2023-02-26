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
(body of type application json)
and type
{
"body":"new scream",
"userHandle":"new",
}

firebase.deploy
userHandle:string
body:string
createdAt:timestamp

lesson4 : authentication
go to firebase dashboard authentication and enable it by email /password

go to project settings and copy

const firebaseConfig = {
apiKey: "AIzaSyB0kWXrKqviuaF61GJOP_UFFFO-yQKjE14",
authDomain: "socialape-78488.firebaseapp.com",
databaseURL: "https://socialape-78488-default-rtdb.europe-west1.firebasedatabase.app",
projectId: "socialape-78488",
storageBucket: "socialape-78488.appspot.com",
messagingSenderId: "472174416647",
appId: "1:472174416647:web:18b495eaf7f47b149a2ba2"
};

after updating the
app.post("/signup", (req, res) => {
type firebase.serve
copy from terminal
=== http://localhost:5000/socialape-d0586/us-central/api/signup

    go to postman
    paste
    choose body with json format

    {
        "email":"user@email.com,
        "password":"12345",
        "confirmPassword":"12345",
        "handle":"user",
    }


    and check with posnman
