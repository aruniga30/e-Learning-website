var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('Public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://localhost:27017/Logindb')
var db = mongoose.connection;
db.on('error',()=>console.log('Error in Connecting to Database'));
db.once('open',()=>console.log("connected to db"));

app.post("/sign_up",(req,res)=>{
    var email = req.body.email;
    var password = req.body.password;
    console.log(name);
    var data = {
        "email": email,
        "password" : password
     }
     db.collection('users').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
     });
     return res.redirect('userpage.html')
})

app.get('/',function(req,res){
    res.set({
        'Access-control-Allow-Origin': '*'
        });
    return res.redirect('login.html');
    }).listen(3000)

console.log("Listening on PORT 3000");