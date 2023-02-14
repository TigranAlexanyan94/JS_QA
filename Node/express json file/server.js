const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json());


const users = [];
app.post("/postUser", (req, res) => {
  users.push(req.body);
  fs.writeFile("data.json", JSON.stringify(users, null, 2), (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
});

app.get("/getUser", (req, res) => {
  res.send(users);
});

app.delete("/delUser/:id", (req, res) => {
    const { id } = req.params;
    users.filter(({ id })=> id !== id )
});

app.listen(8070, () => {
  console.log("Server running");
});
