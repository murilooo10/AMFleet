exports.up = function(knex) {
    return knex.schema.createTable('analise_motoristas', function(table) {
        table.increments();
        table.string('nome').notNullable();
        table.integer('idade').notNullable();
        table.integer('cpf').notNullable(); 
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('analise_motoristas');
};
