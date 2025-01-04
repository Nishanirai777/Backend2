const express = require("express");
const app = express();
console.dir(app);
let port = 8080;
app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});
app.use((req ,res)=>{
    //console.log(req);
    console.log("reqest received");
    //res.send({
        //name: "nisha",
       // color:"red",
   // });
let code = "<h1>Fruits</h1>  <ul><li>orange</li> <li>apple</li></ul> " 
res.send(code);

});