
exports.up = function(knex) {
    return knex.schema.createTable('alerta', function(table) {
        table.increments();
        table.date('data_inicio').notNullable();
        table.date('date_fim', {precision: 6}).notNullable();
        table.string('descricao').notNullable();

        table.string('matricula_usuarioChefe').notNullable();
        table.foreign('matricula_usuarioChefe').references('matricula').inTable('usuarios_chefe');
        
    
    })
};

exports.down = function(knex) {
  
};
