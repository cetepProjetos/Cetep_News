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
  res.render("blog/home", { 
    metaDescricao: "Bem vindo ao CETEP News! Você sai daqui atusalizado de tudo." ,
    metaKeywords: "cetep news, blog, macubas, noticias, semana, principais, tops, ",
    metaTitle: "CETEP NEWS",
    metaUrlImage: "URL",
    metaUrl: "URL",
    noticiasRecentes: [  {
      imageDeFundo: 'https://jornalfato.com.br/files/f3df38bea0571d15e376bda9c1245e59/midia_foto/20210704/aviaocai.jpg',
      descricao: 'Avião caiu no interior da Bahia',
      visualizacoes: 377,
      curtidas: 87
      },],
    topsNoticiasSemanais: [
      {
      imageDeFundo: 'https://jornalfato.com.br/files/f3df38bea0571d15e376bda9c1245e59/midia_foto/20210704/aviaocai.jpg',
      descricao: 'Avião caiu no interior da Bahia',
      visualizacoes: 377,
      curtidas: 87
      },
      {
        imageDeFundo: 'https://tse1.explicit.bing.net/th?id=OIP.ETspXUj4R0T_mY18xGsLYgHaEy&pid=Api&P=0&h=180',
        descricao: 'E agora?!!!!',
        visualizacoes: 2000,
        curtidas: 455
        },
        {
          imageDeFundo: 'https://midia.agoranordeste.com.br/uploads/imagens/pelo_brasil/amazonia_queimadas.png',
          descricao: 'A Amazonas chora.',
          visualizacoes: 554,
          curtidas: 67
          },
    ]
  

  });
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
