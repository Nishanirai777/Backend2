const express = require("express");
const app = express();
console.dir(app);
let port = 1010;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

//this is for /nisha/search/about
app.get("/", (req, res) => {
    res.send("you contacted root path");
});
app.get("/apple", (req, res) => {
    res.send("you  contacted apple path");
});
app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});
app.get("/Nisha", (req, res) => {
    res.send("welcome to nisha app");
});
app.get("*", (req, res) => {
    res.send("this path is not exits");
});
app.post("*", (req, res) => {
    res.send("this path is not exits");
});

// this is for only response...
//app.use((req ,res)=>{
//console.log(req);
//console.log("reqest received");
//res.send({=
// });
//let code = "<h1>Fruits</h1>  <ul><li>orange</li> <li>apple</li></ul> "
//res.send(code);
//});