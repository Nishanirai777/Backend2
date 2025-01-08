const  express = require("express");
const app = express();
const path = require("path");
const port = 4040;
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
    const followers = ["saraj" ,"sabita", "maite", "aashish"];
let {username}= req.params;
//console.log(username);
res.render("instagram.ejs", {username, followers});
});
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});
