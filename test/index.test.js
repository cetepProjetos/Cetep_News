const database = require("../infra/database.js")

test('conectando no banco de dados', async function (){
  const resultado = await database.query("SELECT 1+1 as total")
  expect(resultado.rows[0].total).toBe(2)
});

test('executando soma de 2 + 2', async function (){
  const resultado = await database.query("SELECT 2+2 as total")
  expect(resultado.rows[0].total).toBe(4)
});



  
