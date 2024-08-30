require('dotenv').config()
const {Client} = require('pg')

async function query(sql) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    password:process.env.POSTGRES_PASSWORD,
    database:process.env.POSTGRES_DATABASE,
    user:process.env.POSTGRES_USER,

  })
  await client.connect()

  const resultado = await client.query(sql)
  await client.end()
  return resultado
}

module.exports = {query}