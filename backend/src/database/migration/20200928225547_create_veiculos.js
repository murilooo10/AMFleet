exports.up = function(knex) {
    return knex.schema.createTable('veiculos', function(table) {
        table.increments();
        table.string('chassi').notNullable();
        table.string('renavam').notNullable();
        table.string('placa').notNullable();
        table.string('cor').notNullable();
        table.integer('ano').notNullable();
        table.string('fabricante').notNullable();
        table.string('modelo').notNullable();
        table.integer('quilometragem').notNullable();
        table.string('tipo_combustivel').notNullable();    
        table.string('avarias').notNullable();    

        table.string('id_usuario').notNullable();
        table.foreign('id_usuario').references('id').inTable('usuarios');
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('veiculos');
};
