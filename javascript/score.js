var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb+srv://Aruniga:aruniga30@cluster0.zukzbzo.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))
app.post("/get",(req,res)=>{
    var  name=req.body.name;
    var  score=req.body.fscore;

    
    var data = {
        "name": name,
        "score":score
        
    }

    db.collection('marks').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('sample quiz.html')

})

app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('sample quiz.html');
}).listen(3000);

console.log("Listening on PORT 3000");