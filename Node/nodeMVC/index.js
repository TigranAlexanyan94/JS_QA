const express = require("express");
const bodyParser = require("body-parser");
const routes = require ("./routes/index");
const port = 3000;


const app = express();

app.use(bodyParser.json());
app.use(routes);

app
    .get("/ping", (req, res) => {
        res.send("Pong");
    })

app
    .get("*", (req, res) => {
        res.status(404).send("Not fount");
    })

app.listen(port, () => {
    console.log(`Listining http://localhost:${port}`)
})