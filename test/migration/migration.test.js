const migration = require("../../infra/migration.js")

test('Subir as migrações', async function (){

   const resultado=  await migration.up(false);
   expect(Array.isArray(resultado)).toBe(true)
    // const resultado = await database.query("SELECT 1+1 as total")
    // expect(resultado.rows[0].total).toBe(2)
  });
  