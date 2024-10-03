require("dotenv").config(); //pega as variaveis de ambiente
const { Client } = require("pg"); //busca a class cliente no module pg

async function query(sql) {
  const client = new Client({ //cria nova instancia pro cliente
    host: process.env.POSTGRES_HOST,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
  });
  await client.connect(); //conecta o cliente ao banco de dados

  const resultado = await client.query(sql); // o resultado da consulta é armazenado aqui
  await client.end(); //encerra a conexão
  return resultado; //retorna o resultado da colsulta
}

module.exports = { query }; //função query exportável
