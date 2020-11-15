
exports.up = function(knex) {
    return knex.schema.createTable('chefe_manutecao', function(table) {
        table.integer('id').increments();
        table.string('matricula').notNullable();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable(); 
        table.integer('tipo_de_usuario').notNullable(); 
    })
};

exports.down = function(knex) {
  
};
