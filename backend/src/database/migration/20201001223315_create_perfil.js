
exports.up = function(knex) {
    return knex.schema.createTable('perfil', function(table) {
        table.increments();
        table.string('id_chefeManutencao').notNullable();
        table.foreign('id_chefeManutencao').references('id').inTable('chefe_manutencao');

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfil');
};
