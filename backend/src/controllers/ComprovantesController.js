const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const comprovantes = await connection('comprovantes')
        .join('motorista', 'comprovantes.id_motorista', '=', 'motorista.id')
        .select('comprovantes.url', 'motorista.nome');

        return response.json(comprovantes);

    },

    async create(request, response){
        const { url_foto, matricula_motorista} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('comprovantes').insert({
            url_foto,
            id_motorista,
            id_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('comprovantes').where('id', id).first().delete();

        return response.status(204).send();
    }
}