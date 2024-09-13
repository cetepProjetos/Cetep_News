require('dotenv').config()
const {runner} = require("node-pg-migrate")
const {join} = require('path')


async function up(dryRun) {

    console.log("process.env.DATABASE_URL", process.env.DATABASE_URL);
   const resultado = await runner({
        databaseUrl: process.env.DATABASE_URL,
        dir: join('infra', 'migrations'),
        direction:'up',
        dryRun: dryRun,
        verbose: true,

    })
    
    return resultado
}

module.exports  = {
up
}