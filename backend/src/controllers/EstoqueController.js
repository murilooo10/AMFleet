const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const estoque = await connection('estoque').select('*');

        return response.json(estoque);

    },

    async create(request, response){
        const { id_peca, data_entrada, data_saida, quantidade} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('estoque').insert({
            id_peca,
            data_entrada,
            data_saida,
            quantidade,
            matricula_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('estoque').where('id', id).first().delete();

        return response.status(204).send();
    }
}