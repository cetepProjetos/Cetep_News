const http = require('node:http')

const server = http.createServer(function (req, res){
const method = req.method
const url = req.url
console.log("metado", method);
console.log("url", url);

if(url === "/noticias-gerais" && method === "GET"){
  res.writeHead(211);
  res.end("notícias gerais")
  return
}
if(url === "/top-noticias" && method === "GET"){
  res.writeHead(211);
  res.end("as melhores notícias")
  return
}
if(url === "/bunner" && method === "GET"){
  res.writeHead(211);
  res.end("bunner")
  return
}

  res.writeHead(404)
  res.end()
})

server.listen(3000, '0.0.0.0', function(){
  console.log(`run initialize`);
  
})