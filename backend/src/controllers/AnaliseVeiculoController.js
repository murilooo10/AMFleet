const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const analise_veiculos = await connection('analise_veiculos').select('*');

        return response.json(analise_veiculos);

    },

    async create(request, response){
        const { placa, ano, fabricante, modelo, quilometragem, avarias} = request.body;
        const matricula_usuarioChefe = request.headers.authorization;

        const [id] = await connection('analise_veiculos').insert({
            placa,
            ano,
            fabricante,
            modelo,
            quilometragem,
            avarias,
            matricula_usuarioChefe
        })
        
        return response.json({ id });
    },

    async delete(request, response){
        const { id } = request.params;

        await connection('analise_veiculos').where('id', id).first().delete();

        return response.status(204).send();
    }
}