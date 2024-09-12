const database = require("../infra/database.js");

async function verificarStatusBanco() {
  //  SHOW max_connections;

  const resposta = await database.query("SHOW server_version;");
  // const version = resposta.rows[0].server_version;

  // const updateAt = new Date();
  console.log(resposta);
}
test("conectando ao banco de dados");
