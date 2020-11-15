
exports.up = function(knex) {
    return knex.schema.createTable('agendamento', function(table) {
        table.increments();
        table.date('data').notNullable();
        table.time('hora', {precision: 6}).notNullable();
        table.string('status');

        table.string('id_pecas').notNullable();
        table.string('id_veiculo').notNullable();
        table.string('matricula_usuarioChefe').notNullable();

        table.foreign('id_pecas').references('id').inTable('pecas');
        table.foreign('id_veiculo').references('id').inTable('veiculos');
        table.foreign('matricula_usuarioChefe').references('matricula').inTable('usuarios_chefe');
        
    
    })
};

exports.down = function(knex) {
  
};
