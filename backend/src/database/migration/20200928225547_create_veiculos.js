exports.up = function(knex) {
    return knex.schema.createTable('veiculos', function(table) {
        table.increments();
        table.string('chassi');
        table.string('renavam').notNullable();
        table.string('placa').notNullable();
        table.string('cor').notNullable();
        table.integer('ano').notNullable();
        table.string('fabricante').notNullable();
        table.string('modelo').notNullable();
        table.integer('quilometragem').notNullable();
        table.string('tipo_combustivel').notNullable();    
        table.string('avarias').notNullable();    

        table.string('matricula_usuarioChefe').notNullable();

        table.foreign('matricula_usuarioChefe').references('matricula').inTable('usuarios_chefe');
  
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('veiculos');
};
