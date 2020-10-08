const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
        const perfil = await connection('perfil').select('*');
    
        return response.json(perfil);
    },

    async create(request, response){
        try{
            const { matricula,  nome, sobrenome, tipo_de_usuario, cpf, cnh, idade, data_admissao, sexo, valor_venda, email, password, carteira_de_trabalho} = request.body;

            crypto.createHash('md5').update(password).digest("hex");
    
            await connection('perfil').insert({
                    matricula, 
                    nome,
                    sobrenome,
                    tipo_de_usuario,
                    cpf,
                    cnh,
                    idade,
                    data_admissao,
                    sexo,
                    valor_venda,
                    email,
                    password,
                    carteira_de_trabalho
            })
    
            return response.json({ matrícula })
        }catch{
            return response.status(401).send();
        }
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('perfil').where('id', id).first().delete();

        return response.status(204).send();
    }
}