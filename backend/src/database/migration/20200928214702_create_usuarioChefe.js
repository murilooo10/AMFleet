exports.up = function(knex) {
  return knex.schema.createTable('usuarios_chefe', function(table) {
      table.increments();
      table.string('matricula').notNullable();
      table.string('nome').notNullable();
      table.string('sobrenome').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.integer('tipo_de_usuario').notNullable(); 
  })
};

exports.down = function(knex) {
 return knex.schema.dropTable('usuarios_chefe');
};
