const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const pecas = await connection('pecas').select('*');

        return response.json(pecas);

    },

    async create(request, response){
        const { nome, preco, descricao} = request.body;
        const codigo_perfil = request.headers.authorization;
        if(codigo_perfil = 2){
            const [id] = await connection('pecas').insert({
                nome,
                codigo_perfil,
                quantidade,
            })
            
            return response.json({ id });
        }
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('pecas').where('id', id).delete();

        return response.status(204).send();
    }
}