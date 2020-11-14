exports.up = function(knex) {
    return knex.schema.createTable('analise_veiculos', function(table) {
        table.increments();
        table.string('placa').notNullable();
        table.integer('ano').notNullable();
        table.string('fabricante').notNullable();
        table.string('modelo').notNullable();
        table.integer('quilometragem').notNullable();
        table.string('avarias').notNullable();    
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('analise_veiculos');
};
