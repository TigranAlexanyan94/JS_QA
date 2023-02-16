const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const client = require("./config/config");
const port = 2000;

const app = express();

app.use(bodyParser.json());
app.use(routes);

app.get("/ping", (req, res) => {
  res.send("Pong");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

client.connect((error) => {
  if (error) {
    console.log("Database error : ", error);
  } else {
    console.log("Database connected");
  }
});

app.listen(port, () => {
  console.log(`Listining http://localhost:${port}`);
});
