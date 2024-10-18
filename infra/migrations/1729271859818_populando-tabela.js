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
pgm.sql(`
    INSERT INTO noticias(slug, descricao, titulo, corpo, imagem_capa, imagem_fundo,
     curtidas,visualizasoes, data_postagem, top_semanal) 
     values('theobaldo-morreu', 'O diretor do cetep infelizmente faleceu nessa segunda.',
      'Diretor morreu e deixou saudades','<h1>Theobaldo Morreu</h1>', 'capa', 'fundo', 12, 22,  '2024-10-02 23:55:44.000', false);

    `)

    pgm.sql(`
      INSERT INTO noticias(slug, descricao, titulo, corpo, imagem_capa, imagem_fundo,
       curtidas,visualizasoes, data_postagem, top_semanal) 
       values('Não Haverá aula amanhã', 'Devido a falta de água não haverá aula nos três turnos',
        'O não abastecimento inpedirá a realização das aulas','<h1>Não ha água</h1>', 'capa', 'fundo', 70, 112,  '2024-10-05 23:56:44.010', true);
  
      `)
    pgm.sql(`
        INSERT INTO noticias(slug, descricao, titulo, corpo, imagem_capa, imagem_fundo,
         curtidas,visualizasoes, data_postagem, top_semanal) 
         values('O governador da Bahia não sansiona os gastos com a educação em 2025', 'O governador exercicio Gerônimo Rodrigues deseja reduzir os gastos com a educação.',
          'Governador hipocrita e traçoeiro!','<h1>o governado, ex-professor  da rede municipal reduz recursos</h1>', 'capa',
           'fundo', 30, 257,  '2024-11-06 12:08:45.000', true);
       `)
       pgm.sql(`
        INSERT INTO noticias(slug, descricao, titulo, corpo, imagem_capa, imagem_fundo,
         curtidas,visualizasoes, data_postagem, top_semanal) 
         values('Reunião de líderes após o primeiro intervalo em todos os turnos', 'REUNIÃO DE LÍDERES, COMPAREÇAM',
          'A direção convoca uma reunião com os líderes de todas as turmas','<h1>A reunião deve ter uma duração média de 40 minutos', 'capa',
           'fundo', 300, 2,  '2024-11-06 07:30:45.000', false);
       `)
       pgm.sql(`
        INSERT INTO noticias(slug, descricao, titulo, corpo, imagem_capa, imagem_fundo,
         curtidas,visualizasoes, data_postagem, top_semanal) 
         values('O governador da Bahia não sansiona os gastos com a educação em 2025', 'O governador exercicio Gerônimo Rodrigues deseja reduzir os gastos com a educação.',
          'Governador hipocrita e traçoeiro!','<h1>o governado, ex-professor  da rede municipal reduz recursos</h1>', 'capa',
           'fundo', 300, 2,  '2024-11-06 00:01:45.000', false);
       `)
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.sql(`DELETE FROM noticias`)
};
