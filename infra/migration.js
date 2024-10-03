require('dotenv').config() //variaveis de ambiente 
const {runner} = require("node-pg-migrate") //busca a class runner para executar as migrate
const {join} = require('path') //class join usada para criar caminhos em n diretorios de forma segura e portatil


async function up(dryRun) { //parametro (false: relmente || true: simulação)

    console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
   const resultado = await runner({
        databaseUrl: process.env.DATABASE_URL,        
        dir: join('infra', 'migrations'),               //opções para a função runner
        direction:'up',
        dryRun: dryRun,
        verbose: true,

    })
    
    return resultado //retorna o resultado das execuções
}

module.exports  = {up} //exportável