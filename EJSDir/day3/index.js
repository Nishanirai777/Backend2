const  express = require("express");
const app = express();
const path = require("path");
const port = 9090;
app.use(express.static(path.join(__dirname ,"public/css")));
app.use(express.static(path.join(__dirname ,"public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.get("/",(req, res)=>{
    //res.send("this is home");
    res.render("home.ejs");
});
app.get("/rolldice", (req, res)=>{
    let dicevalue = Math.floor(Math.random()*6) + 1 ;
res.render("rolldice.ejs",{dicevalue: dicevalue});
});
app.get("/ig/:username",(req, res)=>{
    //const followers = ["saraj" ,"sabita", "maite", "aashish"];
//let {username}= req.params;
//console.log(username);
let {username} =req.params;
const instaData = require("./data (1).json");

const data =instaData[username];
if(data){
    res.render("instagram.ejs",{data});
}else{
    res.render("error.ejs");
}

console.log(data);
});
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});