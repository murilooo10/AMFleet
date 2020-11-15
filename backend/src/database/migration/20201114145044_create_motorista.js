
exports.up = function(knex) {
    return knex.schema.createTable('motoristas', function(table) {
        table.increments();
        table.string('matricula').notNullable();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.integer('idade').notNullable();
        table.string('sexo').notNullable();
        table.integer('rg').notNullable();
        table.integer('cpf').notNullable();
        table.integer('cnh').notNullable();
        table.integer('carteira_trabalho').notNullable();
        table.integer('valor_venda');
        table.date('data_admissao').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.integer('tipo_de_usuario').notNullable(); 
    })
};

exports.down = function(knex) {
  
};
