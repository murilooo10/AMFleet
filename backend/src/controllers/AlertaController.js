const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const alerta = await connection('alerta').select('*');

        return response.json(alerta);

    },

    async create(request, response){
        const { descricao, data_inicio, data_fim} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('alerta').insert({
            descricao,
            data_inicio,
            data_fim,
            matricula_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('alerta').where('id', id).first().delete();

        return response.status(204).send();
    }
}