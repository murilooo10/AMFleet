const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const usuarios = await connection('usuarios')
            .where('id', id)
            .select('email', 'password')
            //.first();


        const motoristas = await connection('motoristas')
            .where('id', id)
            .select('email', 'password')
            //.first();
    }
}