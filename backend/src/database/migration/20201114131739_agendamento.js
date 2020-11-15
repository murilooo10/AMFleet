
exports.up = function(knex) {
    return knex.schema.createTable('agendamento', function(table) {
        table.increments();
        table.string('titulo');
        table.date('data').notNullable();
        table.time('hora', {precision: 6}).notNullable();
        table.string('descricao');

        table.string('id_pecas');
        table.string('id_veiculo');
        table.string('id_usuarios');

        table.foreign('id_pecas').references('id').inTable('pecas');
        table.foreign('id_veiculo').references('id').inTable('veiculos');
        table.foreign('id_usuarios').references('id').inTable('usuarios');
        
    
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('agendamento');
  
};
