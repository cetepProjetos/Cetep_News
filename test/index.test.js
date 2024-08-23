const database = require("../infra/database.js")

test('conectando no banco de dados', async function (){
  const resultado = await database.query("SELECT 1+1 as total")
  expect(resultado.rows[0].total).toBe(2)
});