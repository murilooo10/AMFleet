
exports.up = function(knex) {
    return knex.schema.createTable('comprovantes', function(table) {
        table.increments();
        table.string('url_foto').notNullable();

        table.string('matricula_motorista').notNullable();
        table.string('matricula_usuarioChefe').notNullable();
        table.foreign('matricula_motorista').references('matricula').inTable('motoristas');
        table.foreign('matricula_usuarioChefe').references('matricula').inTable('usuarios_chefe');
    })
};

exports.down = function(knex) {
  
};
