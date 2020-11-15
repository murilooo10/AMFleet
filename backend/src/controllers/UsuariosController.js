const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {

    async index(request, response){
        const perfil = await connection('usuarios').select('*');
    
        return response.json(perfil);
    },

    async create(request, response){
        try{
            const { matricula,  nome, sobrenome, codigo_perfil, cpf, cnh, idade, data_admissao, sexo, valor_venda, email, password, carteira_de_trabalho} = request.body;

            crypto.createHash('md5').update(password).digest("hex");
            
            if(codigo_perfil == 1 || codigo_perfil == 2){

                await connection('usuarios').insert({
                    matricula, 
                    nome,
                    sobrenome,
                    email,
                    password,
                    codigo_perfil,
                })
            }else{
                codigo_perfil = 3;

                await connection('motoristas').insert({
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
                    carteira_de_trabalho,
                    codigo_perfil,
                })

                await connection('usuarios').insert({
                    matricula, 
                    nome,
                    sobrenome,
                    email,
                    password,
                    codigo_perfil,
                })
            }

    
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