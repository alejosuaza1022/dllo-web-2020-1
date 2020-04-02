const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo!</h1>");
});

app.get("/tarea", (req, res) => {
  res.send("<h1>Estoy en otro endpoint!</h1>");
});

app.listen(3000, "127.0.0.1", () => {
  console.log(`El API en express esta corriendo en: http://127.0.0.1:3000`);
});
