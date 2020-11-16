const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const pecas = await connection('pecas').select('*');

        return response.json(pecas);

    },

    async create(request, response){
        const { nome, quantidade} = request.body;
        const codigo_perfil = request.headers.authorization;
        try{

                const [id] = await connection('pecas').insert({
                    nome,
                    codigo_perfil,
                    quantidade,
                })
                
                return response.json({ id });
            
        }catch{
            return response.status(401).send();
        }
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('pecas').where('id', id).first().delete();

        return response.status(204).send();
    }
}