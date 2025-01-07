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
app.listen(port,() => {
    console.log(`listening on port ${port}`);
});