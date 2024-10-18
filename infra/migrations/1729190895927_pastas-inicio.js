const { type } = require('express/lib/response');

/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
    pgm.createTable('noticias', {
        id: 'id',
        //midias: {type: 'interger', notNull: true, references: 'midias', onDelete: 'CASCADE'},
        slug: {type: 'text', notNull: true},// Não sei se esta correto
        descricao: {type: 'varchar(100)', notNull: true},
        titulo: {type: 'varchar(50)', notNull: true},
        corpo: {type: 'text', notNull: true},
        imagem_capa: {type: 'varchar(255)', notNull: 'true'},
        imagem_fundo: {type:'varchar(255)', notNull: 'true'},
        curtidas: {type: 'integer', default: 0},
        visualizasoes: {type: 'integer', default: 0},
        data_criacao: {type: 'timestamp', default: pgm.func('current_timestamp')},
        data_postagem: {type: 'timestamp', notNull: true},
        data_modificacao: {type: 'timestamp', default:  pgm.func('current_timestamp')},
        top_semanal: {type: 'boolean', default: false},
        palavras_chaves: {type: 'text'}
    })

  
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
    pgm.sql(`drop table noticias`)
};
