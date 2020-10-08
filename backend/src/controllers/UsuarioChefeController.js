const connection = require('../database/connection');
//const crypto = require('crypto')
module.exports = {

    async index(request, response){
        const usuarios_chefe = await connection('usuarios_chefe').select('*');
    
        return response.json(usuarios_chefe);
    },

    async create(request, response) {
        
        const {matricula , nome, sobrenome, email, password} = request.body;

            //crypto.createHash('md5').update(password).digest("hex");

            await connection('usuarios_chefe').insert({
                matricula,
                nome,
                sobrenome,
                email,
                password,
            })

            return response.json({ matricula });

    }
}