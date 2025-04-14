const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/api/budas", (req, res) => {
    const budas = 
        ["birthday, red, blue"];
    res.send(budas);
});

app.listen(3001, () => {
    console.log("im listening");
});
