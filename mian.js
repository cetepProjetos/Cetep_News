const http = require('node:http')

const server = http.createServer(function (req, res){
const method = req.method
const url = req.url
console.log("metado", method);
console.log("url", url);


})

server.listen(3000, '0.0.0.0', function(){
  console.log(`run initialize`);
  
})