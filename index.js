const express = require("express");
var bodyParser = require("body-parser");
const app = express();
var jsonParser = bodyParser.json();
var cors = require("cors");
var bit = 0;

app.use(cors());

app.post("/", jsonParser, function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  cima = req.body.up;
  baixo = req.body.down;
  esquerda = req.body.left;
  direita = req.body.right;
  garra = req.body.garra;

  console.log(bit);
  res.end();
});

app.get("/", function (req, res) {
  res.writeHead(200, { "Content-Type": "application/json", mode: "cors" });
  res.write(
    JSON.stringify({
      cima: bit,
      baixo: bit,
      esquerda: bit,
      direita: bit,
      garra: bit,
    }),
  );
  res.end();
});

app.listen(3000);