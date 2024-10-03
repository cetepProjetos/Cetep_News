const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const noticias = [
  {
    id: "2121",
    sku: "amanha-visita-secretaria",
    titulo: "Amanhã receberemos como visita a secretária.",
    data: "2024-09-28",
    planoDeFundo:
      "https://www.scurra.com.br/blog/dicas-para-criar-reunioes-online-e-com-resultados-exponenciais/",
    inconDaNoticia:
      "https://lspost.com.br/blog/softwares/plataforma-para-reuniao-online-facilita-comunicacao-entre-funcionarios/",
    descricao: "Vamos receber a visita",
    curtidas: 56,
    visualizacao: 100,
  },
  {
    id: "2121",
    sku: "aluna-calçola-professor",
    titulo: "Aluna joga calçola no professor em sala de aula!",
    data: "2024-09-28",
    planoDeFundo:
      "https://www.scurra.com.br/blog/dicas-para-criar-reunioes-online-e-com-resultados-exponenciais/",
    inconDaNoticia:
      "https://lspost.com.br/blog/softwares/plataforma-para-reuniao-online-facilita-comunicacao-entre-funcionarios/",
    descricao: "Vamos receber a visita",
    curtidas: 77,
    visualizacao: 148,
  },
  {
    id: "2121",
    sku: "pe-de-meia-corta-cetep",
    titulo: "Governo corta o programa Pé-De-Meia no CETEP!",
    data: "2024-09-28",
    planoDeFundo:
      "https://www.scurra.com.br/blog/dicas-para-criar-reunioes-online-e-com-resultados-exponenciais/",
    inconDaNoticia:
      "https://lspost.com.br/blog/softwares/plataforma-para-reuniao-online-facilita-comunicacao-entre-funcionarios/",
    descricao: "Vamos receber a visita",
    curtidas: 75,
    visualizacao: 107,
  },
  {
    id: "2121",
    sku: "inauguração-sala-jogos-cetep",
    titulo: "Nesta segunda-feira será a inauguração da sala de jogos no CETEP!",
    data: "2024-09-28",
    planoDeFundo:
      "https://www.scurra.com.br/blog/dicas-para-criar-reunioes-online-e-com-resultados-exponenciais/",
    inconDaNoticia:
      "https://lspost.com.br/blog/softwares/plataforma-para-reuniao-online-facilita-comunicacao-entre-funcionarios/",
    descricao: "Vamos receber a visita",
    curtidas: 288,
    visualizacao: 400,
  },
  {
    id: "2121",
    sku: "falta-agua-cetep",
    titulo: "Esta semana não haverá aula devido a falta de água no CETEP.",
    data: "2024-09-28",
    planoDeFundo:
      "https://www.scurra.com.br/blog/dicas-para-criar-reunioes-online-e-com-resultados-exponenciais/",
    inconDaNoticia:
      "https://lspost.com.br/blog/softwares/plataforma-para-reuniao-online-facilita-comunicacao-entre-funcionarios/",
    descricao: "Vamos receber a visita",
    curtidas: 55,
    visualizacao: 78,
  },
];

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.get("/noticias", function (req, res) {
  res.json(noticias);
});

app.get("/noticias/tops", function (req, res) {
  res.json(noticias);
});

app.get("/noticias/:slug/views", function (req, res) {
  const slug = req.params.slug;

  console.log(slug);

  for (var i = 0; i < noticias.length; i++) {
    console.log("i", i);
    if (noticias[i].sku == slug) {
      console.log("encontrou");
      noticias[i].visualizacao++;
      res.sendStatus(204);
      return;
    }
  }
  res.sendStatus(404);
});

app.listen(port, function () {
  console.log("Servidor subiu na porta " + port);
});

// app.get("/noticias/:sku", function(req, res) {
//   const sku = req.params.sku;

//   for(const noticia of noticias) {
//     if (noticia.sku == sku) {
//       res.json(noticia);
//       return;
//     }
//   }

//   res.sendStatus(404);
// });

// app.post("/noticias", function(req, res) {
//   const corpoDaNoticia = req.body;
//   noticias.push(corpoDaNoticia);
//   res.sendStatus(200);
// });

// app.listen(port, function() {
//   console.log("Subiu o servidor");
// });

// app.get("/noticias/tops", function(req, res) {
//   res.send("Tops notícias");
// });
