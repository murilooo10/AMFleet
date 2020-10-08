const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const { email, password} = request.body;

        const perfil = await connection('usuarios_chefe')
            .where('email', email)
            .where('password', password)
            .select(email, password)
    }
}