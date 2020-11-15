const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
        const motoristas = await connection('motoristas').select('*');
    
        return response.json(motoristas);
    },

    async create(request, response){
        try{
            const { matricula,  nome, sobrenome, tipo_de_usuario, cpf, cnh, idade, data_admissao, sexo, valor_venda, email, password, carteira_trabalho} = request.body;

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
                    carteira_trabalho,
            })
    
            return response.json({ matrícula })
        }catch{
            return response.status(401).send();
        }
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('motoristas').where('id', id).first().delete();

        return response.status(204).send();
    }
}