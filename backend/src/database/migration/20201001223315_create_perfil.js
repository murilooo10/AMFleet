
exports.up = function(knex) {
    return knex.schema.createTable('perfil', function(table) {
        table.increments();
        table.string('matricula').notNullable();
        table.string('nome').notNullable();
        table.string('sobrenome').notNullable();
        table.integer('tipo_de_usuario').notNullable();
        table.string('cpf').nullable();
        table.string('cnh').nullable();
        table.integer('idade').notNullable();
        table.date('data_admissao').nullable();
        table.string('sexo').notNullable();
        table.decimal('valor_venda').nullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('carteira_de_trabalho').nullable();

        
    
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('perfil');
};
