
exports.up = function(knex) {
  return knex.schema.createTable('pecas', function(table) {
    table.increments();
    table.string('nome').notNullable();
    table.integer('quantidade').notNullable();

    table.string('codigo_perfil').notNullable();
    table.foreign('codigo_perfil').references('codigo_perfil').inTable('usuarios');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('pecas');
};
