const express = require("express");
const app = express();
const api = "https://demoapp-testing.herokuapp.com/";

app.get(`${api}/users`, async (req, res) => {
  res.sendStatus(200);
});

app.get(`${api}/users/:id`, async (req, res) => {
  res.sendStatus(200);
});

module.exports = {
  app,
};
