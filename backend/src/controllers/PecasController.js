const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const pecas = await connection('pecas').select('*');

        return response.json(pecas);

    },

    async create(request, response){
        const { nome, preco, descricao} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('pecas').insert({
            nome,
            //preco,
            //descricao,
            //matricula_usuarioChefe,
            quantidade,
            matricula_chefeManutencao,
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('pecas').where('id', id).first().delete();

        return response.status(204).send();
    }
}