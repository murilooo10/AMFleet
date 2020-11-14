exports.up = function(knex) {
    return knex.schema.createTable('analise_vendas', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.string('placa').notNullable();
        table.integer('cpf').notNullable();
        table.string('data').notNullable();
        table.integer('km_inicial').notNullable();
        table.integer('km_final').notNullable();    
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('analise_vendas');
};
