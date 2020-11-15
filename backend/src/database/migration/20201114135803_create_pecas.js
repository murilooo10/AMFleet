
exports.up = function(knex) {
  return knex.schema.createTable('pecas', function(table) {
    table.increments();
    table.string('nome').notNullable();
    table.integer('quantidade').notNullable();

    table.string('matricula_chefeManutencao').notNullable();
    table.foreign('matricula_chefeManutencao').references('matricula').inTable('chefe_manutencao');
  })
};

exports.down = function(knex) {
  
};
