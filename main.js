require("dotenv").config();
const path = require("node:path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("blog/home", { titulo: "TEST" });
});

app.get("/noticias", function (req, res) {
  res.json([]);
});

app.get("/noticias/tops", function (req, res) {
  res.json([]);
});

app.get("/noticias/:slug/views", function (req, res) {
  const slug = req.params.slug;

  console.log(slug);

  res.sendStatus(404);
});

console.log("hello word");

app.listen(port, function () {
  console.log("Servidor subiu na porta " + port);
});
