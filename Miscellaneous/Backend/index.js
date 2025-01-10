const express = require("express");
const app = express();
const port = 6060;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/register", (req, res) => {
    let { user, password } = req.query;

    res.send(`standard GET response.WElcome ${user}!`);
});
app.post("/register", (req, res) => {
    let {user, password}= req.body;
    res.send(`Standard POST response.Welcome ${user}!`);
});

app.listen(port, () => {
    console.log(`listening to port${port}`);
});
