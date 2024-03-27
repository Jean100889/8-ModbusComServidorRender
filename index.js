const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json();
var cors = require("cors");

var cima = 0;
var baixo = 0;
var esquerda = 0;
var direita = 0;
var garra = 0;

app.use(cors());

app.post("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  cima = req.body.up;
  baixo = req.body.down;
  esquerda = req.body.left;
  direita = req.body.right;
  garra = req.body.garra;

  //console.log(bit);
  res.end();
});

app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  res.write(
    JSON.stringify({
      up: cima,
      down: baixo,
      left: esquerda,
      right: direita,
      garra: garra,
    }),
  );
  res.end();
});

app.listen(3000);